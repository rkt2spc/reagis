# reagis

[![Travis branch](https://img.shields.io/travis/rocketspacer/reagis.svg?style=flat-square)](https://travis-ci.org/rocketspacer/reagis)
[![Maintainability](https://api.codeclimate.com/v1/badges/6ada66d073f2b8d81ca6/maintainability)](https://codeclimate.com/github/rocketspacer/reagis/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6ada66d073f2b8d81ca6/test_coverage)](https://codeclimate.com/github/rocketspacer/reagis/test_coverage)

Need a place to store your global values? Wonder where to put your knex instance, your mongoose connection? Struggling to deal with circular dependencies when declaring relationships in ORMs?

**reagis** is just what you need. A simple key-value store designed to house your global values.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install --save reagis
```

## Documentation

* [Website and Documentation](https://nmtuan.space/reagis)
* Checkout [API.md](https://github.com/rocketspacer/reagis/blob/master/API.md) for detailed references

## Quick start

Just require reagis and start setting/getting your values

```javascript
// config/knex.js
const registry = require('reagis');
registry.set('knex', knex({ ... }));
registry.set('bookshelf', registry.get('knex'));

// models/user.js
const registry = require('reagis');
const User = registry.get('bookshelf').Model.extends({
  tableName : 'users',
  stories   : function() {
    return this.hasMany(registry.get('models.story'));
  }
});

registry.set('models.user', User);
module.exports = User;
```

## Bulk load

When your values are loaded from a files and need to be loaded all at once, or you're just too lazy doing too many `registry.set`

```javascript
const registry = require('reagis');
const knex = require('knex')({ ... });
const bookshelf = require('bookshelf')(knex);

registry.load({
  knex      : knex,
  bookshelf : bookshelf,
});
```

## Custom registry

In case you want to extend or instantiate your own registry, just import the exposed Registry class.

```javascript
const { Registry } = require('reagis');

// Extending base Registry
class ModelRegistry extends Registry {
  model(key, value) {
    if (this.has(key)) return this.get(key);
    this.set(key, value);
    return value;
  }
}

// Instantiate
const registry = new ModelRegistry();
```
