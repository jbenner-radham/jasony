/*
 *
 * radioactivehamster.com/projects/jasony
 *
 * Copyright (c) 2014 James Benner
 * Licensed under the MIT license.
 */

'use strict';

var exports = module.exports = Object.create(JSON);

exports.beautify = function (obj) {
    return this.stringify(obj, null, 4);
};

/* exports.awesome = function() {
  return 'awesome';
}; */
