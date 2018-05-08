'use strict';

import moment from 'moment';
import buisiness from 'moment-business';
import notifier from './WebhookNotifier';
import setting from './setting.json';

class TodayStateBuilder {
  static create() {
    const m = moment();
    return {
      created_at: m,
      am: {
        deadline: m.set({
          hour: setting.am.deadline.substring(0, 2),
          minute: setting.am.deadline.substring(2, 4)
        }),
        isNotified: false,
        webhook: setting.am.webhook
      },
      pm: {
        deadline: m.set({
          hour: setting.pm.deadline.substring(0, 2),
          minute: setting.pm.deadline.substring(2, 4)
        }),
        isNotified: false,
        webhook: setting.pm.webhook
      }
    };
  }
}

class SleepingObserver {
  constructor(store) {
    this.store = store;
    this.today = TodayStateBuilder.create();
    this.timer = null;
  }

  _proc() {
    const m = moment();

    if (this.today.created_at.date !== m.date) {
      this.today = TodayStateBuilder.create();
    }

    if (!buisiness.isWeekDay(m)) {
      return; // holiday
    }

    if (!this.store.getValue()) {
      return; // out of bed
    }

    for (let obj of [this.today.am, this.today.pm]) {
      if (obj.isNotified) {
        return; // already notified
      }

      if (m.isBetween(obj.deadline, obj.deadline.add('minutes', 15))) {
        notifier.send(obj.webhook);
        obj.isNotified = true;
        return;
      }
    }
  }

  start() {
    if (this.timer) {
      return;
    }

    this.timer = setInterval(this._proc, 5000);
  }

  stop() {
    if (!this.timer) {
      return;
    }

    clearInterval(this.timer);
    this.timer = null;
  }
}

export default SleepingObserver;
