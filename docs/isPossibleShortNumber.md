---
id: isPossibleShortNumber
sidebar_label: isPossibleShortNumber
title: isPossibleShortNumber
description: isPossibleShortNumber | ShortNumberInfo.isPossibleShortNumber | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', ShortNumberInfo, 'ShortNumberInfo.isPossibleShortNumber', 'isPossibleShortNumber']
permalink: 
version: isPossibleShortNumber
---

isPossibleShortNumber(number) is used to checks whether a short number is a possible number.

### Usage

Using Standard JavaScript:

```js
// Get an instance of ShortNumberInfo
const shortInfo = require('libphonenumbers').ShortNumberInfo.getInstance();

// Get an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Check 123456 is possible short number in FR
console.log(shortInfo.isPossibleShortNumber(phoneUtil.parse('123456', 'FR')));
// true
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Get an instance of ShortNumberInfo
const shortInfo = libphonenumbers.ShortNumberInfo.getInstance();

// Get an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Check 123456 is possible short number in FR
console.log(shortInfo.isPossibleShortNumber(phoneUtil.parse('123456', 'FR')));
// true
```
