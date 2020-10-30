---
id: isValidNumberForRegion
sidebar_label: isValidNumberForRegion
title: isValidNumberForRegion
description: isValidNumberForRegion | PhoneNumberUtil.isValidNumberForRegion | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.isValidNumberForRegion', 'isValidNumberForRegion']
permalink: 
version: isValidNumberForRegion
---

isValidNumberForRegion(number, regionCode) is used to checks whether a phone number is valid for a certain region.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Check number of a region is valid
console.log(phoneUtil.isValidNumberForRegion(number, 'US'));
// true
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Check number of a region is valid
console.log(phoneUtil.isValidNumberForRegion(number, 'US'));
// true
```
