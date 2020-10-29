---
id: getRawInput
sidebar_label: getRawInput
title: getRawInput
description: getRawInput | PhoneNumber.getRawInput | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumber, 'PhoneNumber.getRawInput', 'getRawInput']
permalink: 
version: getRawInput
---

getRawInput() is used to gets the value of the raw input.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); 

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get the phone's raw input
console.log(number.getRawInput());
// => 202-456-2121
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get the phone's raw input
console.log(number.getRawInput());
// => 202-456-2121
```
