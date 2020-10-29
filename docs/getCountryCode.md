---
id: getCountryCode
sidebar_label: getCountryCode
title: getCountryCode
description: getCountryCode | PhoneNumberUtil.getCountryCode | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.getCountryCode', 'getCountryCode']
permalink: 
version: getCountryCode
---

getCountryCode() is used to gets the value of the country code.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); 

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get the phone's country code
console.log(number.getCountryCode());
// => 1
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get the phone's country code
console.log(number.getCountryCode());
// => 1
```
