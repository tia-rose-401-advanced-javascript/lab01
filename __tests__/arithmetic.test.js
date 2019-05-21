'use strict';

var faker = require('faker');

const randomNumber = faker.random.number();
const randomNumberTwo = faker.random.number();


const arithmetic = require('../lib/arithmetic.js');

describe('Arithmatic module', () => {
  //Sad instance of Addition
  it('requires only numbers - addition', () => {
    let a = 'fish';
    let b = 'candy';
    expect (arithmetic.add(a,b)).toBeNull();
  });

  //Happy instance of Addition
  it('it only uses numbers', () => {
    let a = randomNumber;
    let b = randomNumberTwo;

    expect(arithmetic.add(a,b)).toEqual(a+b);
  });


  //Sad instance of Subtraction
  it('requires only numbers - subtraction', () => {
    let a = 'train';
    let b = 'car';
    expect (arithmetic.subtract(a,b)).toBeNull();
  });

  //Happy instance of Subtraction
  it('it only uses numbers', () => {
    let a = randomNumber;
    let b = randomNumberTwo;

    expect(arithmetic.subtract(a,b)).toEqual(a-b);
  });

  //Sad instance of Multiply
  it('requires only numbers - multiply', () => {
    let a = 'book';
    let b = 'duck';
    expect (arithmetic.multiply(a,b)).toBeNull();
  });


  //Happy instance of Multiply
  it('it only uses numbers', () => {
    let a = randomNumber;
    let b = randomNumberTwo;

    expect(arithmetic.multiply(a,b)).toEqual(a*b);
  });


  //Sad instance of Division
  it('requires only numbers - division', () => {
    let a = 'one';
    let b = 'luck';
    expect (arithmetic.division(a,b)).toBeNull();
  });

  //Happy instance of Division
  it('it only uses numbers', () => {
    let a = randomNumber;
    let b = randomNumberTwo;

    expect(arithmetic.division(a,b)).toEqual(a/b);
  });



});


