'use strict';

let greeting = module.exports = {};

greeting.greet = (name) => {
  if( typeof name !== "string" )
    return `hello ${name}`;
};
