# is-nwjs-mac

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> > Check if your code is running on NW.js on Mac.


## Install

```
$ npm install --save is-nwjs-mac
```


## Usage

```js
var isNwjsMac = require('is-nwjs-mac');

// on your browser
console.log(isNwjsMac);
//=> false

// on NW.js on Windows
console.log(isNwjsMac);
//=> false

// on NW.js on Mac
console.log(isNwjsMac);
//=> true
```


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/lyrictenor/node-is-nwjs-mac
[travis-image]: https://img.shields.io/travis/lyrictenor/node-is-nwjs-mac/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-is-nwjs-mac/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-is-nwjs-mac/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/is-nwjs-mac
[npm-image]: https://img.shields.io/npm/v/is-nwjs-mac.svg?style=flat-square
[daviddm-url]: https://david-dm.org/lyrictenor/node-is-nwjs
[daviddm-image]: https://img.shields.io/david/lyrictenor/node-is-nwjs.svg?style=flat-square
