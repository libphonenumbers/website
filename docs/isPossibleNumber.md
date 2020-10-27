---
id: isPossibleNumber
sidebar_label: isPossibleNumber
title: isPossibleNumber
description: isPossibleNumber | PhoneNumberUtil.isPossibleNumber | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.isPossibleNumber', 'isPossibleNumber']
permalink: 
version: isPossibleNumber
---

isPossibleNumber(number) is used to checks whether a phone number is possible.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Check is possible number
console.log(phoneUtil.isPossibleNumber(number));
// => true
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Check is possible number
console.log(phoneUtil.isPossibleNumber(number));
// => true
```
