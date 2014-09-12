'use strict';

var jasony = require('../lib/jasony.js');

// jasony.awesome();
// => awesome

var j = { "hello": "world", "and": { "stuff": "is-cool" } };

jasony.beautify(j);
// =>
// {
//     "hello": "world",
//     "and": {
//         "stuff": "is-cool"
//     }
// }
