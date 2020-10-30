---
id: formatInOriginalFormat
sidebar_label: formatInOriginalFormat
title: formatInOriginalFormat
description: formatInOriginalFormat | PhoneNumberUtil.formatInOriginalFormat | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.formatInOriginalFormat', 'formatInOriginalFormat']
permalink: 
version: formatInOriginalFormat
---

formatInOriginalFormat(number, regionCallingFrom) is used to formats a phone number using the original phone number format that the number is parsed from.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Format number in the original format
console.log(phoneUtil.formatInOriginalFormat(number, 'US'));
// => (202) 456-2121
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Format number in the original format
console.log(phoneUtil.formatInOriginalFormat(number, 'US'));
// (202) 456-2121
```
