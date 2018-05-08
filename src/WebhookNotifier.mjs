'use strict';

import axios from 'axios';

class WebhookNotifier {
  constructor() {}

  async send(webhook) {
    const json = (await axios({
      method: 'post',
      url: webhook,
      headers: {
        'content-type': 'application/json'
      }
    })).data;

    return json;
  }
}

export default new WebhookNotifier();
