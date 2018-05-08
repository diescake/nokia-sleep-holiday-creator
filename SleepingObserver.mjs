'use strict';

import moment from 'moment';
import setting from './setting.json';
import WebhookNotifier from './WebhookNotifier';

class SleepingObserver {
  constructor(store, deadline) {
    this.store = store;
    this.deadline = setting.deadline;
  }

  start() {
    // start observing
  };
  stop() {
    // stop observing
  };
}

export default SleepingObserver;