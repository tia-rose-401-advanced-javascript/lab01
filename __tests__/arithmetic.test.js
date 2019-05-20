'use strict';

var faker = require('faker');

var randomNumber = faker.random.number();
console.log(randomNumber);

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmatic module', () => {
  it('requires only numbers - addition', () => {
    let a = 'death';
    let b = 'destruction';
    expect (arithmetic.add(a,b)).toBeNull();
  });

  it('requires only numbers - subtraction', () => {
    let a = 'depression';
    let b = 'sadness';
    expect (arithmetic.subtract(a,b)).toBeNull();
  });

  it('requires only numbers - multiply', () => {
    let a = 'blackhole';
    let b = 'emptiness';
    expect (arithmetic.multiply(a,b)).toBeNull();
  });

  it('requires only numbers - division', () => {
    let a = 'anxiety';
    let b = 'loneliness';
    expect (arithmetic.division(a,b)).toBeNull();
  });
});


