---
id: isPossibleShortNumberForRegion
sidebar_label: isPossibleShortNumberForRegion
title: isPossibleShortNumberForRegion
description: isPossibleShortNumberForRegion | ShortNumberInfo.isPossibleShortNumberForRegion | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', ShortNumberInfo, 'ShortNumberInfo.isPossibleShortNumberForRegion', 'isPossibleShortNumberForRegion']
permalink: 
version: isPossibleShortNumberForRegion
---

isPossibleShortNumberForRegion(number, regionDialingFrom) is used to checks whether a short number is a possible number when dialed from the given region.

### Usage

Using Standard JavaScript:

```js
// Get an instance of ShortNumberInfo
const shortInfo = require('libphonenumbers').ShortNumberInfo.getInstance();

// Get an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Check 123456 is possible short number for region in FR
console.log(shortInfo.isPossibleShortNumberForRegion(phoneUtil.parse('123456', 'FR'), 'FR'));
// true
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Get an instance of ShortNumberInfo
const shortInfo = libphonenumbers.ShortNumberInfo.getInstance();

// Get an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Check 123456 is possible short number for region in FR
console.log(shortInfo.isPossibleShortNumberForRegion(phoneUtil.parse('123456', 'FR'), 'FR'));
// true
```
