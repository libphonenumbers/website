---
id: getNumberType
sidebar_label: getNumberType
title: getNumberType
description: getNumberType | PhoneNumberUtil.getNumberType | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', PhoneNumberUtil, 'PhoneNumberUtil.getNumberType', 'getNumberType']
permalink: 
version: getNumberType
---

getNumberType(number) is used to gets the type of a valid phone number.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get type of phone number
console.log(phoneUtil.getNumberType(number));
// 2 // FIXED_LINE_OR_MOBILE
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get type of phone number
console.log(phoneUtil.getNumberType(number));
// 2 // FIXED_LINE_OR_MOBILE
```

### PhoneNumberType

The following enums  is used to compare with the output of getNumberType(number).

<table>
  <tr>
    <th>Enum</th>
    <th width="100%">Value</th>
  </tr>
  <tbody>
    <tr>
      <td>FIXED_LINE</td>
      <td>0</td>
    </tr>
    <tr>
      <td>MOBILE</td>
      <td>1</td>
    </tr>
    <tr>
      <td>FIXED_LINE_OR_MOBILE</td>
      <td>2</td>
    </tr>
    <tr>
      <td>TOLL_FREE</td>
      <td>3</td>
    </tr>
    <tr>
      <td>PREMIUM_RATE</td>
      <td>4</td>
    </tr>
    <tr>
      <td>SHARED_COST</td>
      <td>5</td>
    </tr>
    <tr>
      <td>VOIP</td>
      <td>6</td>
    </tr>
    <tr>
      <td>PERSONAL_NUMBER</td>
      <td>7</td>
    </tr>
    <tr>
      <td>PAGER</td>
      <td>8</td>
    </tr>
    <tr>
      <td>UAN</td>
      <td>9</td>
    </tr>
    <tr>
      <td>VOICEMAIL</td>
      <td>10</td>
    </tr>
    <tr>
      <td>UNKNOWN</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
