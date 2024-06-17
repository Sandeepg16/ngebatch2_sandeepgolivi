/*
Run with
> npm install
> npm test palindrome
*/
import { palindrome } from './palindrome'

describe('When calling the palindrome function', () => {
  let result:any;

  it('will return true or false when called', () => {
    //Arrange

    //Act
    result = palindrome('madam');
    //Assert
    expect(result).toBe(true);
  })

  it('will return false for invalid inputs', () => {
    //Arrange

    //Act
    result = palindrome('hello');
    //Assert
    expect(result).toBe(false);
  })

  it('will return true for text that is a palindrome', () => {
    //Arrange

    //Act
    result = palindrome('madam');
    //Assert
    expect(result).toBe(true);

  })
})
