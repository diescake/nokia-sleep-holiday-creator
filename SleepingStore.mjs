'use strict';

import fs from 'fs';
import isSleeping from './is_sleeping.json';

class SleepingStore {
  constructor() {
    this.isSleeping = isSleeping;
    if (typeof this.isSleeping !== 'boolean') {
      throw 'Invalid parameter: is_sleeping.dat. boolean value is expected';
    }
  }

  getValue() {
    return this.isSleeping;
  }

  setValue(newValue) {
    if (this.isSleeping === newValue) {
      return false;
    }

    fs.writeFile('state.json', newValue, err => {
      if (err) throw err;
    });
    isSleeping = newValue;

    return true;
  }
}

export default new SleepingStore();
