---
id: format
sidebar_label: format
title: format
description: format | PhoneNumberUtil.format | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.format', 'format']
permalink: 
version: format
---

format(number, numberFormat) is used to formats a phone number in the specified format using default rules.

### Usage

Using Standard JavaScript:

```js
const PNF = require('libphonenumbers').PhoneNumberFormat;
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); 

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Format number in the RFC3966 format
console.log(phoneUtil.format(number, PNF.RFC3966));
// tel:+1-202-456-2121

// Format number in the national format
console.log(phoneUtil.format(number, PNF.NATIONAL));
// (202) 456-2121

// Format number in the international format
console.log(phoneUtil.format(number, PNF.INTERNATIONAL));
// +1 202-456-2121
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

const PNF = libphonenumbers.PhoneNumberFormat;

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Format number in the RFC3966 format
console.log(phoneUtil.format(number, PNF.RFC3966));
// tel:+1-202-456-2121

// Format number in the national format
console.log(phoneUtil.format(number, PNF.NATIONAL));
// (202) 456-2121

// Format number in the international format
console.log(phoneUtil.format(number, PNF.INTERNATIONAL));
// +1 202-456-2121
```

### PhoneNumberFormat

The following enums is used to pass to format(number, numberFormat).

<table>
  <tr>
    <th>Enum</th>
    <th width="100%">Value</th>
  </tr>
  <tbody>
    <tr>
      <td>E164</td>
      <td>0</td>
    </tr>
    <tr>
      <td>INTERNATIONAL</td>
      <td>1</td>
    </tr>
    <tr>
      <td>NATIONAL</td>
      <td>2</td>
    </tr>
    <tr>
      <td>RFC3966</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
