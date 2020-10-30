---
id: getExtension
sidebar_label: getExtension
title: getExtension
description: getExtension | PhoneNumber.getExtension | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumber, 'PhoneNumber.getExtension', 'getExtension']
permalink: 
version: getExtension
---

getExtension() is used to gets the value of the extension.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); 

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Print the phone's extension
console.log(number.getExtension());
// null
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Print the phone's extension
console.log(number.getExtension());
// => null
```
