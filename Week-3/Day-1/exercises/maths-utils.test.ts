/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from './maths-utils'

describe('When calling the Add function', () => {
  let result;
  it('should add two integers', () => {
    // Arrange: Setup variables here
    let a = 2, b = 3;
    
    // Act: Call function here
    result = add(a, b);

    // Assert: Check results here
    expect(result).toBe(5);
  })

  it('will add strings and numbers', () => {
    // Arrange: Setup variables here
    let a = 'sa', b = 4;
    // Act: Call function here
    result = add(a, b);
    // Assert: Check results here
    expect(result).toBe('sa4');
  })
})

describe('When calling the safeMultiply function', () => {
  let result:any;
  it('should multiply two integers', () => {
    // Arrange: Setup variables here
    // Hint: happy case
    let a = 2, b = 4;
    // Act: Call function here
    result = safeMultiply(a, b);
    // Assert: Check results here
    expect(result).toBe(8);
  })

  it('will throw an error when parameter a is bad', () => {
    // Arrange: Setup variables here
    let a = 'sa', b = 4;
    // Act: Call function here + Assert: Check results here
    // Hint: add a wrapper function

    // Assert
    // Hint: use "toThrow()"
    expect(()=> safeMultiply(a, b)).toThrow();
  })

  it('will throw an error when parameter b is bad', () => {
    // Arrange: Setup variables here
    let a = 4, b = 'sa';
    // Act: Call function here

    // Assert: Check results here
    // You can either do this with a wrapper function and .toThrow, or you can try using a try/catch block

    expect(()=> safeMultiply(a, b)).toThrow();
  })
})
