// In this example, we're going to filter through the numbers array to get only the postive values like in the 'filter.js' example, and then we're going to turn each of those values into a list item. Then finally, we're going to return an unordered list containing all of our positive list items.
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => `<li>${n}</li>`);

const listOfPositiveNumbers = `<ul>${items.join('')}</ul>`
console.log(listOfPositiveNumbers) // <ul><li>1</li><li>2</li><li>3</li></ul>

