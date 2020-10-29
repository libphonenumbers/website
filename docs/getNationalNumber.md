---
id: getNationalNumber
sidebar_label: getNationalNumber
title: getNationalNumber
description: getNationalNumber | PhoneNumber.getNationalNumber | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumber, 'PhoneNumber.getNationalNumber', 'getNationalNumber']
permalink: 
version: getNationalNumber
---

getNationalNumber() is used to gets the value of the national number.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); 

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get the phone's national number
console.log(number.getNationalNumber());
// => 2024562121
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get the phone's national number
console.log(number.getNationalNumber());
// => 2024562121
```
