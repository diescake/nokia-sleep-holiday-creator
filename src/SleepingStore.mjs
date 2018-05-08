'use strict';

import fs from 'fs';

const JSON_PATH = './is_sleeping.json';

class SleepingStore {
  constructor() {
    try {
      this.isSleeping = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8'));
    } catch (e) {
      this.isSleeping = false;
      fs.writeFileSync(JSON_PATH, false);
      return;
    }

    if (typeof this.isSleeping === 'boolean') {
      return;
    }

    this.isSleeping = false;
    fs.writeFileSync(JSON_PATH, false);
  }

  getValue() {
    return this.isSleeping;
  }

  setValue(newValue) {
    if (this.isSleeping === newValue) {
      return false;
    }

    fs.writeFileSync(JSON_PATH, newValue);
    this.isSleeping = newValue;

    return true;
  }
}

export default new SleepingStore();
