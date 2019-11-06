## Classes

<dl>
<dt><a href="#Registry">Registry</a></dt>
<dd><p>Representing a key-value registry</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#registry">registry</a> : <code><a href="#Registry">Registry</a></code></dt>
<dd><p>Default exported registry instance</p>
</dd>
</dl>

<a name="Registry"></a>

## Registry
Representing a key-value registry

**Kind**: global class  

* [Registry](#Registry)
    * [new Registry()](#new_Registry_new)
    * [.clear()](#Registry+clear) ⇒ <code>undefined</code>
    * [.delete(key)](#Registry+delete) ⇒ <code>boolean</code>
    * [.get(key)](#Registry+get) ⇒ <code>any</code>
    * [.set(key, value)](#Registry+set) ⇒ [<code>Registry</code>](#Registry)
    * [.load(obj)](#Registry+load) ⇒
    * [.has(key)](#Registry+has) ⇒ <code>boolean</code>
    * [.keys()](#Registry+keys) ⇒ <code>array</code>
    * [.values()](#Registry+values) ⇒ <code>array</code>
    * [.entries()](#Registry+entries) ⇒ <code>array</code>

<a name="new_Registry_new"></a>

### new Registry()
Creates a new instance of Registry

**Returns**: [<code>Registry</code>](#Registry) - The created Registry instance  
**Example**  
```js
// CommonJS modules
const { Registry } = require('reagis');

// ES2015 modules
import { Registry } from 'reagis';

// Instantiate
const registry = new Registry();
```
<a name="Registry+clear"></a>

### registry.clear() ⇒ <code>undefined</code>
Wipe out all entries in the registry

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>undefined</code> - nothing  
**Access**: public  
<a name="Registry+delete"></a>

### registry.delete(key) ⇒ <code>boolean</code>
Delete an entry.

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>boolean</code> - true if the entry exists and got deleted, false otherwise  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | The key used to identify the entry |

<a name="Registry+get"></a>

### registry.get(key) ⇒ <code>any</code>
Retrieve an entry value

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>any</code> - The entry value if it exists, undefined otherwise  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | The key used to identify the entry |

<a name="Registry+set"></a>

### registry.set(key, value) ⇒ [<code>Registry</code>](#Registry)
Set an entry value

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: [<code>Registry</code>](#Registry) - The calling Registry instance  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | The key used to identify the entry |
| value | <code>any</code> | The value that will be set to the entry |

<a name="Registry+load"></a>

### registry.load(obj) ⇒
Load an entire key-value object as entries

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: The calling Registry instance  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | A key-value object |

<a name="Registry+has"></a>

### registry.has(key) ⇒ <code>boolean</code>
Check whether or not an entry exists

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>boolean</code> - true if such entry exists, false otherwise  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | The key used to identify the entry |

<a name="Registry+keys"></a>

### registry.keys() ⇒ <code>array</code>
Retrieve all existing entry keys

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>array</code> - Return an array of all existing keys in insertion order  
**Access**: public  
<a name="Registry+values"></a>

### registry.values() ⇒ <code>array</code>
Retrieve all existing entry values

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>array</code> - Return an array of all existing values in insertion order  
**Access**: public  
<a name="Registry+entries"></a>

### registry.entries() ⇒ <code>array</code>
Retrieve all existing entries

**Kind**: instance method of [<code>Registry</code>](#Registry)  
**Returns**: <code>array</code> - Return an array of all existing entries in insertion order with the structure { key, value }  
**Access**: public  
<a name="registry"></a>

## registry : [<code>Registry</code>](#Registry)
Default exported registry instance

**Kind**: global constant  
**Example**  
```js
// CommonJS modules
const registry = require('reagis');

// ES2015 modules
import registry from 'reagis';
```
