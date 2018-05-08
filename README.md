# nokia-sleep-day-off

Nokia Sleep creates a day off when you are just being asleep !!

![build](https://img.shields.io/badge/build-good-green.svg)
![build](https://img.shields.io/badge/node->=8.11.1-orange.svg)

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
  // for a half day
  "am": {
    // The webhook url is fired if deadline is passed while sleeping.
    // I assumed that the url is getting from IFTTT.
    "webhook": "https://maker.ifttt.com/trigger/your-am-webhook/with/key/your-key",

    // The deadline is a date as thresholds to post webhook.
    // Timezone is same as your server.
    "deadline": "1000"
  },

  // for a full day
  "pm": {
    "webhook": "https://maker.ifttt.com/trigger/your-pm-webhook/with/key/your-key",
    "deadline": "1300"
  }
}
```

## Launching the server

```sh
yarn start
```

## Note

// For more information. see [Qiita](https://qiita.com/diescake/items/b25791eb7750c775e72f) in Japanese.
