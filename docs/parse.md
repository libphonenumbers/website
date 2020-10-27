---
id: parse
sidebar_label: parse
title: parse
description: parseAndKeepRawInput | PhoneNumberUtil.parse | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.parse', 'parse']
permalink: 
version: parse
---

parse(numberToParse, defaultRegion) is used to parses a string and returns it in proto buffer format.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Get prototype buffer format
console.log(phoneUtil.parse('123456', 'US'));
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Get proto buffer format
console.log(phoneUtil.parse('123456', 'US'));
```
