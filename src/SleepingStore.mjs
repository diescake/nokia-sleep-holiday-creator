'use strict';

import fs from 'fs';
const JSON_PATH = './sleepingState.json';

class SleepingStore {
  constructor() {
    this.isSleeping = false;

    try {
      const value = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8'));
      if (typeof value === 'boolean') {
        this.isSleeping = value;
      }
    } catch (e) {
      console.log(e);
    }

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
