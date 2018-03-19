# registry

Need a place to store your global values? Wonder where to put your knex instance, your mongoose connection? How to deal with circular dependencies when declaring relationships in those ORMs?

**registry** is just what you need. A simple key-value store designed to house your global values.

## Getting started

Just require registry and start setting/getting your values

```javascript
// config/knex.js
const registry = require('registry');
registry.set('knex', knex({ ... }));
registry.set('bookshelf', registry.get('knex'));

// models/user.js
const registry = require('registry');
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
const registry = require('registry');
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
const { Registry } = require('registry');

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

## API References
Checkout API.md for detailed documentation
