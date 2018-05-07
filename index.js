'use strict';

const axios = require('axios');
const moment = require('moment');
const express = require('express');
const app = express();

const setting = require('./setting.json');
const state = require('./state.json');

app.post('/api/incoming_webhook', async(req, res) => {
  console.log('incoming_webhook');
  console.table(req.params);

  // time
  console.log(state);

  const json = (await axios({
    method: 'post',
    url: setting.outgoing_webhook,
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
