const animals = [
    { name: 'Fluffykins', species: 'rabbit', age: 4 },
    { name: 'Caro', species: 'dog', age: 10 },
    { name: 'Hamilton', species: 'dog', age: 7 },
    { name: 'Harold', species: 'fish', age: 12 },
    { name: 'Ursula', species: 'cat', age: 2 },
    {name: 'Jimmy', species: 'fish', age: 1 }
];

// For each animal in the animals array, return a string describing their name and species.
const animalsNames = animals.map(animal => `${animal.name} is a ${animal.species}`);
names

console.log(animalsNames);
// ['Fluffykins is a rabbit', 'Caro is a dog', 'Hamilton is a dog', ...]


// Another example - Derive HTML list items from an array of objects
const animalsAges = animals.map(animal => `${animal.name} is ${animal.age} years old`);
const animalsList = ['<ul',...animalsAges, '</ul>'].join("");

console.log(animalsList)
/*
    <ul>
        <li>Fluffykins is 4 years old</li>
        <li>Caro is 10 years old</li>
        <li>Hamilton is 7 years old</li>
        ...
    </ul>
*/

