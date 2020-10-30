---
id: isValidShortNumber
sidebar_label: isValidShortNumber
title: isValidShortNumber
description: isValidShortNumber | ShortNumberInfo.isValidShortNumber | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', ShortNumberInfo, 'ShortNumberInfo.isValidShortNumber', 'isValidShortNumber']
permalink: 
version: isValidShortNumber
---

Using Standard JavaScript:

```js
// Get an instance of ShortNumberInfo
const shortInfo = require('libphonenumbers').ShortNumberInfo.getInstance();

// Get an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Check 202-456-2121 is valid short number
console.log(shortInfo.isValidShortNumber(number));
// false
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Get an instance of ShortNumberInfo
const shortInfo = libphonenumbers.ShortNumberInfo.getInstance();

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Check 202-456-2121 is valid short number
console.log(shortInfo.isValidShortNumber(number));
// false
```
