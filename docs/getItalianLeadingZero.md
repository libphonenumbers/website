---
id: getItalianLeadingZero
sidebar_label: getItalianLeadingZero
title: getItalianLeadingZero
description: getItalianLeadingZero | PhoneNumber.getItalianLeadingZero | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', PhoneNumber, 'PhoneNumber.getItalianLeadingZero', 'getItalianLeadingZero']
permalink: 
version: getItalianLeadingZero
---

getItalianLeadingZero() is used to gets the value of the italian leading zero.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); 

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get phone's italian leading zero
console.log(number.getItalianLeadingZero());
// null
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get phone's italian leading zero
console.log(number.getItalianLeadingZero());
// null
```
