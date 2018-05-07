'use strict';

const axios = require('axios');
const express = require('express');
const state = require('./state.json');

const outgoing_webhook = 'https://maker.ifttt.com/trigger/nokia-sleep-outgoing/with/key/b4eSEBCdiXI-_bqwMEr4n2';

const app = express();

app.post('/api/incoming_webhook', async(req, res) => {
  console.log('incoming_webhook');
  console.table(req.params);

  const json = (await axios({
    method: 'post',
    url: outgoing_webhook,
    headers: {
      'content-type': 'application/json'
    }
  })).data;

  console.log(json);
  res.json(json);
  return;
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
