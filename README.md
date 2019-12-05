[![Build Status](https://travis-ci.com/BalenD/AutoBinder.svg?branch=master)](https://travis-ci.com/BalenD/AutoBinder)
[![codecov](https://codecov.io/gh/BalenD/AutoBinder/branch/master/graph/badge.svg)](https://codecov.io/gh/BalenD/AutoBinder)

<h1 align="center">
  <br>
  AutoBinding
  <br>
</h1>

<p align="center">
  <a href="#about">About</a> •
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
</p>

<h1 align="center" id="#about">About</h1>
This is a small package that automatically binds 'this' context to every method outside of your class constructor.
<h1 align="center" id="#install">Install</h1>

```bash
npm i --save autoBind
```

<h1 align="center" id="#usage">Usage</h1>

```javascript
const autoBind = require('autoBind');

class Test {
  constructor() {
    autoBind(this);
  }

  foo() {
    // do something
  }

  bar() {
    // do something
  }
};
```
