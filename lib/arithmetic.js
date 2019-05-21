'use strict';


let arithmetic = module.exports = {};

arithmetic.add = function(...args) {
  if( typeof args[0] !== "number" || typeof args[1] !== "number" ) { return null; }
  return args[0] + args[1];
};

arithmetic.subtract = function (...args) {
  if( typeof args[0] !== "number" || typeof args[1] !== "number" ) { return null; }
  return args[0] - args[1];
};

arithmetic.multiply = function (...args) {
  if( typeof args[0] !== "number" || typeof args[1] !== "number" ) { return null; }
  return args[0] * args[1];
};

arithmetic.division = function (...args) {
  if( typeof args[0] !== "number" || typeof args[1] !== "number" ) { return null; }
  if(args[1] === 0) return null;
  return args[0] / args[1];
};
