---
id: connectsToEmergencyNumber
sidebar_label: connectsToEmergencyNumber
title: connectsToEmergencyNumber
description: connectsToEmergencyNumber | ShortNumberInfo.connectsToEmergencyNumber | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', ShortNumberInfo, 'ShortNumberInfo.connectsToEmergencyNumber', 'connectsToEmergencyNumber']
permalink: 
version: connectsToEmergencyNumber
---

connectsToEmergencyNumber(number, regionCode) is used to checks whether the short number can be used to connect to emergency services when dialed from the given region.

### Usage

Using Standard JavaScript:

```js
// Get an instance of ShortNumberInfo
const shortInfo = require('libphonenumbers').ShortNumberInfo.getInstance();

// Check 911 is emergency number in US
console.log(shortInfo.connectsToEmergencyNumber('911', 'US'));
// true
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Get an instance of ShortNumberInfo
const shortInfo = libphonenumbers.ShortNumberInfo.getInstance();

// Check 911 is emergency number in US
console.log(shortInfo.connectsToEmergencyNumber('911', 'US'));
// true
```
