// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}


// Reduce the array to only the total age in months of all the doggie Academites
// TODO

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
const sortByName =  someAcademitesWithAges.sort((a, b) => {
  // Convert names to lowercase to ensure case-insensitive sorting
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  
  // Compare the names
  if (nameA < nameB) {
      return -1; // nameA comes before nameB
  } else if (nameA > nameB) {
      return 1; // nameA comes after nameB
  } else {
      return 0; // names are equal
  }
});

console.log("sortByName",sortByName);
// TODO

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges = someAcademitesWithAges.sort((a:any,b:any) => b.age - a.age);
// TODO


// EOF
