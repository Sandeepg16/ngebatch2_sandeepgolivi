/*
Run this with
> npm install
> npm test zoo-animals
*/

import { addDolphinToPool, petThePenguins } from './zoo-animals'

describe('When adding a dolphin to the pool', () => {
  let result: any;
  test('And speed is over 30 we get Speedy Alice', () => {
    // Arrange

    // Act 
    result = addDolphinToPool(40);
    // Assert
    // Hint: expect.objectContaining on name only
    console.log("result", result);
    expect(result.name).toBe('Speedy Alice');
  })

  test('And speed is under 30 we get Slow Bob', () => {
    // Arrange

    // Act 
    result = addDolphinToPool(20);
    // Assert
    // Hint: expect.objectContaining on name only
    expect(result.name).toBe('Slow Bob');
  })

  test('Speedy Alice is a fast mammal with two flippers', () => {
    // Arrange
    let expectedResult = {
      name: 'Speedy Alice',
      swimSpeedKph: 40,
      flippers: 2,
      mammal: true
    }
    // Act 
    result = addDolphinToPool(40);
    // Assert
    // Hint: toStrictEqual the whole object
    expect(result).toMatchObject(expectedResult);
  })

  test('Slow Bob is a slow mammal with two flippers', () => {
    // Arrange
    let expectedResult = {
      name: 'Slow Bob',
      swimSpeedKph: 20,
      flippers: 2,
      mammal: true
    }
    // Act 
    result = addDolphinToPool(20);
    // Assert
    // Hint: toStrictEqual the whole object
    expect(result).toMatchObject(expectedResult);
  })
})

describe('When petting the penguins', () => {
  let result:any;
  test('One penguin with one fish will be fed', () => {
    // Arrange

    // Act 
    result = petThePenguins(1,1);
    // Assert
    // Hint: toStrictEqual the whole array
    console.log("result",result);
  })

  test('One penguin with no fish will be hungry', () => {
    // Arrange

    // Act 

    // Assert
    // Hint: toStrictEqual the whole array
  })

  describe('And there are not enough fish', () => {

    test('At least one penguin will be hungry', () => {
      // Arrange

      // Act 

      // Assert
      // Hint: expect.arrayContaining on one penguin
    })
  })

})
