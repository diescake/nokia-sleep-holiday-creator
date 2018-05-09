'use strict';

import moment from 'moment';
import setting from '../setting/setting.json';

class TodayStateBuilder {
  static create() {
    const m = moment();
    return {
      created_at: m,
      am: {
        deadline: m.clone().set({
          hour: setting.am.deadline.substring(0, 2),
          minute: setting.am.deadline.substring(2, 4)
        }),
        isNotified: false,
        webhook: setting.am.webhook
      },
      pm: {
        deadline: m.clone().set({
          hour: setting.pm.deadline.substring(0, 2),
          minute: setting.pm.deadline.substring(2, 4)
        }),
        isNotified: false,
        webhook: setting.pm.webhook
      }
    };
  }
}

export default TodayStateBuilder;
