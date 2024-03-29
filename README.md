# CroxyDB

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/12341481f7db44c291844ab1d97cf602)](https://app.codacy.com/manual/CroxyTheDev/croxydb?utm_source=github.com&utm_medium=referral&utm_content=CroxyTheDev/croxydb&utm_campaign=Badge_Grade_Dashboard) ![Download](https://img.shields.io/npm/dt/croxydb.svg?style=flat-square) ![License](https://img.shields.io/npm/l/croxydb.svg?style=flat-square)

# What's new in 0.0.8?
- Fixed some bugs.
- Added MongoDB support.

> a database module

Examples

> Moving Data From Quick.DB

```js
const db = require("croxydb");
const quickdb = require("quick.db");

db.move(quickdb)
```

> Normal Example

```js
const db = require("croxydb")

db.set("x.y.z", "abc") // abc

db.get("x") // {y: {z: "abc"}}
db.fetch("x") // {y: {z: "abc"}}
db.all() // {x: {y: {z: "abc"}}}

db.push("a", "hello") //  ["hello"]
db.push("a", "world") //  ["hello", "world"]
db.unpush("a", "hello") // ["world"]

db.push("b", {test: "croxydb"}) // [{test: "croxydb"}]
db.push("b", {test2: "croxydb2"}) // [{test: "croxydb"}, {test2: "croxydb2"}]
db.delByPriority("b", 1) // [{test2: "croxydb"}]
db.setByPriority("b", {newtest:"hey this is edited"}, 1) // [{newtest:"hey this is edited"}]

db.has("x") // true
db.delete("x") // true
db.deleteAll() // true
```

> MongoDB Support (It is new feature, if you find any bugs join my [Discord](https://discord.gg/h8XJYVDyKN))

```js
const db = require("croxydb")
db.setAdapter("mongo", 
{
    url: "Your Mongo URL", 
    schema: "Schema"
})

db.set("x.y.z", "abc") // abc

db.get("x") // {y: {z: "abc"}}
db.fetch("x") // {y: {z: "abc"}}
db.all() // {x: {y: {z: "abc"}}}

db.push("a", "hello") //  ["hello"]
db.push("a", "world") //  ["hello", "world"]
db.unpush("a", "hello") // ["world"]

db.push("b", {test: "croxydb"}) // [{test: "croxydb"}]
db.push("b", {test2: "croxydb2"}) // [{test: "croxydb"}, {test2: "croxydb2"}]
db.delByPriority("b", 1) // [{test2: "croxydb"}]
db.setByPriority("b", {newtest:"hey this is edited"}, 1) // [{newtest:"hey this is edited"}]

db.has("x") // true
db.delete("x") // true
db.deleteAll() // true
```

> With Options Example

```js
const db = require("croxydb")
db.setReadable(true) // It makes readable your JSON DB file.
db.noBlankData(true) // If you delete anything from object and new object size is less than 1, automaticly removes that object.
db.setAdapter("yamldb") // It makes adapter as YAML adapter. Default adapter is JsonDB
db.setFolder("folder") // You can set database folder name
db.setFile("db") // You can set database file name

db.set("x.y.z", "abc") // abc

db.get("x") // {y: {z: "abc"}}
db.fetch("x") // {y: {z: "abc"}}
db.all() // {x: {y: {z: "abc"}}}

db.push("a", "hello") //  ["hello"]
db.push("a", "world") //  ["hello", "world"]
db.unpush("a", "hello") // ["world"]

db.push("b", {test: "croxydb"}) // [{test: "croxydb"}]
db.push("b", {test2: "croxydb2"}) // [{test: "croxydb"}, {test2: "croxydb2"}]
db.delByPriority("b", 1) // [{test2: "croxydb"}]
db.setByPriority("b", {newtest:"hey this is edited"}, 1) // [{newtest:"hey this is edited"}]

db.has("x") // true
db.delete("x") // true
db.deleteAll() // true
```

If you've any question, you can join to my Discord server: [Click me!](https://discord.gg/h8XJYVDyKN)
