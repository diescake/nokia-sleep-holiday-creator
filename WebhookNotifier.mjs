'use strict';

const axios = require('axios');

class WebhookNotifier {
  constructor(webhook) {
    this.webhook = webhook;
  }

  async asyncPost() {
    const json = (await axios({
      method: 'post',
      url: setting.webhook.outgoing,
      headers: {
        'content-type': 'application/json'
      }
    })).data;

    return data;
  }
}

module.exports = WebhookNotifier;