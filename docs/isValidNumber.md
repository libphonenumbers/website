---
id: isValidNumber
sidebar_label: isValidNumber
title: isValidNumber
description: isValidNumber | PhoneNumberUtil.isValidNumber | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.isValidNumber', 'isValidNumber']
permalink: 
version: isValidNumber
---

isValidNumber(number) is used to checks whether a phone number matches a valid pattern.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get is valid number
console.log(phoneUtil.isValidNumber(number));
// true
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get is valid number
console.log(phoneUtil.isValidNumber(number));
// true
```
