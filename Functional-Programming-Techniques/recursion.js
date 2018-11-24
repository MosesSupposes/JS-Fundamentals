// Simple example of recursion
function countDownFrom(num) {
    if (num === 0) return;
    console.log(num)
    countDownFrom(num - 1)
}
countDownFrom(10)
// Should ouput 
// 10
// 9
// 8
// ...
// 1

// Here's a more complex example -- one that a loop can't simulate.


let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
];



// The categories array is a representation of a database with this hierarchy of categories: animals > mammals > dogs,cats

// The goal is to represent this hierarchy as a tree structure. Here's what the desired output looks like:

/*
{
    animals: {
        mammals: {
            dogs: {
                chihuahua: null,
                labrador: null
            },
            cats: {
                persian: null,
                siamese: null
            }
        }
    }
}
*/

function makeTree(categories, parent) {
    let node = {};
    categories
    .filter(c => c.parent === parent)
    .forEach(c => 
        node[c.id] = makeTree(categories, c.id));
    return node;
}

console.log(
    JSON.stringify(
        makeTree(categories, null)
        , null, 2)
);

/* 
    Returns: 
    {
        "animals": {
            "mammals": {
                "cats": {
                    "persian": {},
                    "siamese": {}
                },
                "dogs": {
                    "chihuahua": {},
                    "labrador": {}
                }
            }
        }
    }
*/