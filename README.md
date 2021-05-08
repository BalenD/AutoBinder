[![Build Status](https://travis-ci.com/BalenDezai/Context-Binder.svg?branch=master)](https://travis-ci.com/BalenDezai/Context-Binder)
[![codecov](https://codecov.io/gh/BalenDezai/Context-Binder/branch/master/graph/badge.svg?token=j5sox8ZH8G)](https://codecov.io/gh/BalenDezai/Context-Binder)

<h1 align="center">
  <br>
  Automatic Context Binding
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
npm i --save context-binder
```

<h1 align="center" id="#usage">Usage</h1>

```javascript
const contextBind = require('context-binder');

class Test {
  constructor() {
    contextBind(this);
  }

  foo() {
    // do something
  }

  bar() {
    // do something
  }
};
```
