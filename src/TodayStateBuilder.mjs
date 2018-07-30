'use strict';

import moment from 'moment';
import setting from '../setting/setting.json';

class TodayStateBuilder {
  static create() {
    const m = moment();
    return {
      created_at: m,
      webhook: setting.webhook,
      am: {
        deadline: m.clone().set({
          hour: setting.deadline.am.substring(0, 2),
          minute: setting.deadline.am.substring(2, 4)
        }),
        alreadyNotified: false
      },
      pm: {
        deadline: m.clone().set({
          hour: setting.deadline.pm.substring(0, 2),
          minute: setting.deadline.pm.substring(2, 4)
        }),
        alreadyNotified: false
      }
    };
  }
}

export default TodayStateBuilder;
