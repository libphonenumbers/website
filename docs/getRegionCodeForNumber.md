---
id: getRegionCodeForNumber
sidebar_label: getRegionCodeForNumber
title: getRegionCodeForNumber
description: getRegionCodeForNumber | PhoneNumberUtil.getRegionCodeForNumber | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.getRegionCodeForNumber', 'getRegionCodeForNumber']
permalink: 
version: getRegionCodeForNumber
---

getRegionCodeForNumber(number) is used to gets the region where a phone number is from.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get region code of number
console.log(phoneUtil.getRegionCodeForNumber(number));
// => US
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get region code of number
console.log(phoneUtil.getRegionCodeForNumber(number));
// => US
```
