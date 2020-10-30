---
id: inputDigit
sidebar_label: inputDigit
title: inputDigit
description: inputDigit | AsYouTypeFormatter.inputDigit | Libphonenumbers
image: /img/libphonenumbers-cover.png
keywords: ['libphonenumbers', AsYouTypeFormatter, 'AsYouTypeFormatter.inputDigit', 'inputDigit']
permalink: 
version: inputDigit
---

inputDigit(digit) is used to formats a phone number on-the-fly as each digit is entered.

### Usage

Using Standard JavaScript:

```js
const AsYouTypeFormatter = require('libphonenumbers').AsYouTypeFormatter;

// Create an instance object of AsYouTypeFormatter
const formatter = new AsYouTypeFormatter('US');

console.log(formatter.inputDigit('2')); // => 2
console.log(formatter.inputDigit('0')); // => 20
console.log(formatter.inputDigit('2')); // => 202
console.log(formatter.inputDigit('-')); // => 202-
console.log(formatter.inputDigit('4')); // => 202-4
console.log(formatter.inputDigit('5')); // => 202-45
console.log(formatter.inputDigit('6')); // => 202-456
console.log(formatter.inputDigit('-')); // => 202-456-
console.log(formatter.inputDigit('2')); // => 202-456-2
console.log(formatter.inputDigit('1')); // => 202-456-21
console.log(formatter.inputDigit('2')); // => 202-456-212
console.log(formatter.inputDigit('1')); // => 202-456-2121
```

Using ECMAScript (ES):

```js
import libphonenumbers from 'libphonenumbers';

const AsYouTypeFormatter = libphonenumbers.AsYouTypeFormatter;

// Create an instance object of AsYouTypeFormatter
const formatter = new AsYouTypeFormatter('US');

console.log(formatter.inputDigit('2')); // 2
console.log(formatter.inputDigit('0')); // 20
console.log(formatter.inputDigit('2')); // 202
console.log(formatter.inputDigit('-')); // 202-
console.log(formatter.inputDigit('4')); // 202-4
console.log(formatter.inputDigit('5')); // 202-45
console.log(formatter.inputDigit('6')); // 202-456
console.log(formatter.inputDigit('-')); // 202-456-
console.log(formatter.inputDigit('2')); // 202-456-2
console.log(formatter.inputDigit('1')); // 202-456-21
console.log(formatter.inputDigit('2')); // 202-456-212
console.log(formatter.inputDigit('1')); // 202-456-2121
```
