const animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
];

function filter(arr, predicate, context) {
    const filteredArray = [];
    arr.forEach(index => {
        // If the index passes the callback's condition, push it to the filtered array 
        predicate.call(context, index) && filteredArray.push(index)
    })
    // Return only the values that passed the test provided in the callback
    return filteredArray;
}

// predicate function to use for test
function isDog(animal) {
    return animal.species === 'dog'
}

// test
filter(animals, isDog) /* [ 
                            { name: 'Caro, species: dog }, 
                            { name: 'Hamilton', species: 'dog' } 
                          ] 
                        */
