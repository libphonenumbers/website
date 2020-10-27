---
id: parseAndKeepRawInput
sidebar_label: parseAndKeepRawInput
title: parseAndKeepRawInput
description: parseAndKeepRawInput | PhoneNumberUtil.parseAndKeepRawInput | Libphonenumbers
image: /img/reactpatterns-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.parseAndKeepRawInput', 'parseAndKeepRawInput']
permalink: 
version: parseAndKeepRawInput
---

parseAndKeepRawInput(numberToParse, defaultRegion) is used to parses a string and returns it in prototype buffer format while keeping the raw input value.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');
```
