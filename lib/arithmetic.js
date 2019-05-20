'use strict';


let arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a+b;
};

arithmetic.subtract = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a-b;
};

arithmetic.multiply = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a*b;
};

arithmetic.division = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  // if(b === 0) return null;
  return a % b;
};
