let animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
];

function filterDogs() {
    let dogs = [];
    for (animal of animals) {
        if(animal.species === 'dog') 
            dogs.push(animal);
    }
    return dogs;
}

filterDogs() // [{name: 'Caro, species: dog}, { name: 'Hamilton', species: 'dog' }]