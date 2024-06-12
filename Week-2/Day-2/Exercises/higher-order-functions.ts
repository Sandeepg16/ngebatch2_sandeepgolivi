/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/

const Developers = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
  { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
]


export type Developer = {
  firstName: string,
  lastName: string,
  country: string,
  continent: string,
  age: number,
  language: string
}


// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
export function countFromEurope(developers: Developer[]) {
  return developers.filter((developer) => developer.continent === 'Europe').length;
}

// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
export function getGreetings(developers: Developer[]) {
  return developers.map((developer) => `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`)
}

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing(developers: Developer[]) {
  return developers.some((developer) => developer.language === 'Javascript');
}

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Aisha, Croatia'
export function getFirstPythonDeveloper(developers: Developer[]) {
  const index = developers.findIndex((developer) => developer.language === 'Python');
  return index !== -1 ? `${developers[index].firstName}, ${developers[index].country}` : 'none';
}

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.
export function getAverageAge(developers: Developer[]) {
  let count = 0;
  for (let i in developers) {
    count += developers[i].age;
  }
  const average = count / developers.length
  return developers.length !== 0 ? average : -1;
}
getAverageAge(Developers);
// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
export function getLanguageCounts(developers: Developer[]) {
  let count: any = {};

  developers.map(dev => {
    if (count[dev.language]) {
      count[dev.language]++;
    } else {
      count[dev.language] = 1;
    }
  });

  return count;
}

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Aisha']
export function getOldest(developers: Developer[]) {

}

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
export function isGlobalGroup(developers: Developer[]) {

}
