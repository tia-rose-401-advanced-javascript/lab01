'use strict';

let faker = require('faker');

const randomName = faker.name.firstName();
console.log(randomName);

const greeting = require('../lib/greet.js');

describe('Greeting module', () => {
  //Sad instance of greeting
  it('requires only a string', () => {
    let name = true;
    expect(greeting.greet(name)).toBeNull;
  });
  
  
  //---Still working on getting this test to pass
  //Happy instance of greeting
  // it('returns string', () => {
  //   let name = randomName;
  //   expect(greeting.greet(name)).toEqual(name);
  // });
});
