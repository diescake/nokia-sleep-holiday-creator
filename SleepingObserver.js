'use strict';

const moment = require('moment');
const setting = require('./setting.json');

const WebhookNotifier = require('./WebhookNotifier');

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

module.exports = SleepingObserver;