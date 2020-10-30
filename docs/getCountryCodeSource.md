---
id: getCountryCodeSource
sidebar_label: getCountryCodeSource
title: getCountryCodeSource
description: getCountryCodeSource | PhoneNumber.getCountryCodeSource | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', PhoneNumber, 'PhoneNumber.getCountryCodeSource', 'getCountryCodeSource']
permalink: 
version: getCountryCodeSource
---

getCountryCodeSource() is used to gets the value of the country code source.

### Usage

Using Standard JavaScript:

```js
// Create an instance of PhoneNumberUtil
const phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); 

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Get the phone's extension
console.log(number.getCountryCodeSource());
// FROM_DEFAULT_COUNTRY
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

// Create an instance of PhoneNumberUtil
const phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();

// Parse number with US country code and keep raw input
const number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');

// Print the phone's extension
console.log(number.getCountryCodeSource());
// FROM_DEFAULT_COUNTRY
```

### CountryCodeSource

The following enums is used to compare with the output of getCountryCodeSource().

<table>
  <tr>
    <th>Enum</th>
    <th width="100%">Value</th>
  </tr>
  <tbody>
    <tr>
      <td>UNSPECIFIED</td>
      <td>0</td>
    </tr>
    <tr>
      <td>FROM_NUMBER_WITH_PLUS_SIGN</td>
      <td>1</td>
    </tr>
    <tr>
      <td>FROM_NUMBER_WITH_IDD</td>
      <td>5</td>
    </tr>
    <tr>
      <td>FROM_NUMBER_WITHOUT_PLUS_SIGN</td>
      <td>10</td>
    </tr>
    <tr>
      <td>FROM_DEFAULT_COUNTRY</td>
      <td>20</td>
    </tr>
  </tbody>
</table>
