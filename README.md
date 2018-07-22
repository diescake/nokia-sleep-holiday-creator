# nokia-sleep-hoiday-creator

All you have to do is sleeping when you want to take a holiday.

![build](https://img.shields.io/badge/build-good-green.svg)
![build](https://img.shields.io/badge/node->=10.0.0-orange.svg)

## Installing

This code is tested with `node.js 10.0.0`

```sh
yarn install
```

## Setting

Copy and rename the `setting_template.json` to `setting.json` and input values as followed.

```sh
cp ./setting/setting_template.json ./setting/setting.json
```

```js
{
  // Holiday for a half day
  "am": {
    // This webhook url is fired if the deadline is passed while sleeping.
    // I assumed that the url is getting from IFTTT.
    "webhook": "https://maker.ifttt.com/trigger/your-am-webhook/with/key/your-key",

    // This deadline is a date as thresholds to post webhook.
    // Timezone is depened on your server.
    "deadline": "1015"
  },

  // Holiday for a full day
  "pm": {
    "webhook": "https://maker.ifttt.com/trigger/your-pm-webhook/with/key/your-key",
    "deadline": "1315"
  }
}
```

## Launching the server

```sh
yarn start
```

## Note

// For more information. see [Qiita](https://qiita.com/diescake/items/) in Japanese.
