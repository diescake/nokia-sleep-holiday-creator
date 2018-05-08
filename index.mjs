'use strict';

import express from 'express';
const app = express();

import store from './src/SleepingStore';

import SleepingObserver from './src/SleepingObserver';
const observer = new SleepingObserver(store);
observer.start();

const buildResponse = ok => {
  if (ok) {
    return 'updated';
  } else {
    return 'do nothing';
  }
};

app.post('/api/into-bed', async (req, rest) => {
  console.log('into-bed');
  console.table(req.params);

  const ok = store.setValue(true);
  res.send(buildResponse(ok));
});

app.post('/api/outof-bed', async (req, res) => {
  console.log('outof-bed');
  console.table(req.params);

  const ok = store.setValue(false);
  res.send(buildResponse(ok));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
