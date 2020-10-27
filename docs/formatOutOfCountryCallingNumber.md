---
id: formatOutOfCountryCallingNumber
sidebar_label: formatOutOfCountryCallingNumber
title: formatOutOfCountryCallingNumber
description: formatOutOfCountryCallingNumber | PhoneNumberUtil.formatOutOfCountryCallingNumber | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.formatOutOfCountryCallingNumber', 'formatOutOfCountryCallingNumber']
permalink: 
version: formatOutOfCountryCallingNumber
---

formatOutOfCountryCallingNumber(number, regionCallingFrom) is used to formats a phone number for out-of-country dialing purposes.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('300-577-8989', 'US');

// Format number in the out-of-country format from US
console.log(phoneUtil.formatOutOfCountryCallingNumber(number, 'US'));
// => 1 (300) 577-8989

// Format number in the out-of-country format from JP
console.log(phoneUtil.formatOutOfCountryCallingNumber(number, 'JP'));
// => 010 1 300-577-8989
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('300-577-8989', 'US');

// Format number in the out-of-country format from US
console.log(phoneUtil.formatOutOfCountryCallingNumber(number, 'US'));
// => 1 (300) 577-8989

// Format number in the out-of-country format from JP
console.log(phoneUtil.formatOutOfCountryCallingNumber(number, 'JP'));
// => 010 1 300-577-8989
```
