---
id: isValidShortNumberForRegion
sidebar_label: isValidShortNumberForRegion
title: isValidShortNumberForRegion
description: isValidShortNumberForRegion | ShortNumberInfo.isValidShortNumberForRegion | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', ShortNumberInfo, 'ShortNumberInfo.isValidShortNumberForRegion', 'isValidShortNumberForRegion']
permalink: 
version: isValidShortNumberForRegion
---

isValidShortNumberForRegion(number, regionDialingFrom) is used to checks whether a short number matches a valid pattern in a region.

### Usage

Using Standard JavaScript:

```js
// Get an instance of ShortNumberInfo
const shortInfo = require('libphonenumbers').ShortNumberInfo.getInstance();

// Get an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Check 202-456-2121 is valid short number for US region
console.log(shortInfo.isValidShortNumberForRegion(number, 'US'));
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

// Check 202-456-2121 is valid short number for US region
console.log(shortInfo.isValidShortNumberForRegion(number, 'US'));
// false
```
