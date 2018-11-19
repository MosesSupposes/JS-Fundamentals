let myFavoriteAnime = ['Steins;Gate', 'Attack on Titan', 'Serial Experiments Lane', 'Naruto/ Naruto Shippuden'];

for (let anime of myFavoriteAnime) {
    console.log(anime);
}

// Wrapped in function:

function printList(list) {
    for (let item of list) {
        console.log(item);
    }
}
// printList(myFavoriteAnime);