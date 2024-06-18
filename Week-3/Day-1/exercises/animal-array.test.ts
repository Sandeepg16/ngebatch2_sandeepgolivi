import { addToArray } from './animal-array'
/*
Run with
> npm install
> npm test animal-array
*/

//Tasks
// - Make every test in the first describe have the item 'Early Bird' at the start of the array
// - Make sure the array is empty after each test

//This is a test that shows you how the function works and can be tested
it('I can add an item to an existing array', () => {
  //ARRANGE
  const animalArray: string[] = []
  const itemToAdd = 'Timely Hippo'
  const expectedResult = ['Timely Hippo']

  //ACT
  const result = addToArray(animalArray, itemToAdd)

  //ASSERT
  expect(result).toEqual(expectedResult)
})

describe('Every test has early bird at the start of the array', () => {

  let animalArray: any = []

  beforeEach(() => {
    animalArray = ['early bird'];
  })

  it('Adds the item Timely Hippo to an existing array that has Early Bird in it', () => {
    const result = addToArray(animalArray, 'Timely Hippo');
    expect(result).toEqual(['early bird', 'Timely Hippo']);
  })

  it('Adds Timely Hippo and Regular Rat to an existing array that has Early Bird in it', () => {
    addToArray(animalArray, 'Timely Hippo');
    addToArray(animalArray, 'Regular Rat');
    expect(animalArray).toEqual(['early bird', 'Timely Hippo', 'Regular Rat']);
  })

})
