# reagis

[![node](https://img.shields.io/node/v/reagis.svg)](https://www.npmjs.com/package/reagis)
[![npm](https://img.shields.io/npm/v/reagis.svg)](https://www.npmjs.com/package/reagis)
[![David](https://img.shields.io/david/rocketspacer/reagis.svg)](https://david-dm.org/rocketspacer/reagis)
[![npm](https://img.shields.io/npm/dm/reagis.svg)](https://www.npmjs.com/package/reagis)
[![Travis branch](https://img.shields.io/travis/rocketspacer/reagis.svg)](https://travis-ci.org/rocketspacer/reagis)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6ada66d073f2b8d81ca6/test_coverage)](https://codeclimate.com/github/rocketspacer/reagis/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/6ada66d073f2b8d81ca6/maintainability)](https://codeclimate.com/github/rocketspacer/reagis/maintainability)

Need a place to store values that persist through out multiple modules? Wonder where to put your knex instance, your mongoose connection? Struggling to deal with circular dependencies when declaring relationships in ORMs?

**reagis** is just what you need. A simple key-value store designed to house your global singletons.

## Installation

This is a [Node.js](https://nodejs.org/en) module available on the
[npm registry](https://www.npmjs.com/reagis).

Before proceeding, make sure you have [Node.js](https://nodejs.org/en/download) and [npm](https://www.npmjs.com) installed.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
npm install --save reagis
```

## Documentation

* [Website and Documentation](https://nmtuan.space/reagis)
* Checkout [API.md](https://github.com/rocketspacer/reagis/blob/master/API.md) for detailed references

## Quick start

Just require **reagis** and start setting/getting your values

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

When your values are loaded from files or need to be loaded all at once, or you're just too lazy to do call **registry.set** many times.

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

In case you want to extend or instantiate your own registry, just import the exposed **Registry** class.

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
