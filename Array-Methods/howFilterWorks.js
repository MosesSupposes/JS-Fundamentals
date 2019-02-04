let animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
];

function filter(arr, cb) {
    let filteredArray = [];
    arr.forEach(index => {
        // If the index passes the callback's condition, push it to the filtered array 
        cb(index) && filterArray.push(index)
    }
    // Return only the values that passed the test provided in the callback
    return filteredArray;
}

filter(animals, animal => animal.species === 'dog') // [{name: 'Caro, species: dog}, { name: 'Hamilton', species: 'dog' }]
