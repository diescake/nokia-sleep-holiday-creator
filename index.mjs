'use strict';

import express from 'express';
const app = express();

import store from './src/SleepingStore';

import SleepingObserver from './src/SleepingObserver';
const observer = new SleepingObserver(store);
observer.start();

const buildResponse = updated => {
  return updated ? 'updated' : 'do nothing';
};

app.post('/api/into-bed', async (req, res) => {
  console.log('into-bed');
  console.log(req);

  const updated = store.setValue(true);
  res.send(buildResponse(updated));
});

app.post('/api/outof-bed', async (req, res) => {
  console.log('outof-bed');

  const updated = store.setValue(false);
  res.send(buildResponse(updated));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
