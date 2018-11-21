// The simplest implementation of reduce.
const numbers = [1, -1, 2,3];

const sum = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue);

console.log(sum)

// Here's a more advanced example with chaining
import fs from 'fs'
function formatCustomer(file) {
    let output = fs.readFileSync(file, 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('  '))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers;
    }, {});

    let paddedOutput = JSON.stringify(output, null, 2);
    return paddedOutput;
}

formatCustomer('data.txt');
/* Here's what data.txt looks like:
mark johansson  waffle  iron  80  2
mark johansson  blender  200  1
mark johansson  knife  10  4
Nikita Smith  waffle  iron  80  1
Nikita Smith  knife  10  2
Nikita Smith  pot  29  3
*/

/*
Expected output:
{
​​​​​  "mark johansson": [​​​​​
​​​​​    {​​​​​
​​​​​      "name": "waffle",​​​​​
​​​​​      "price": "iron",​​​​​
​​​​​      "quantity": "80"​​​​​
​​​​​    },​​​​​
​​​​​    {​​​​​
​​​​​      "name": "blender",​​​​​
​​​​​      "price": "200",​​​​​
​​​​​      "quantity": "1"​​​​​
​​​​​    },​​​​​
​​​​​    {​​​​​
​​​​​      "name": "knife",​​​​​
​​​​​      "price": "10",​​​​​
​​​​​      "quantity": "4"​​​​​
​​​​​    }​​​​​
​​​​​  ],​​​​​
​​​​​  "Nikita Smith": [​​​​​
​​​​​    {​​​​​
​​​​​      "name": "waffle",​​​​​
​​​​​      "price": "iron",​​​​​
​​​​​      "quantity": "80"​​​​​
​​​​​    },​​​​​
​​​​​    {​​​​​
​​​​​      "name": "knife",​​​​​
​​​​​      "price": "10",​​​​​
​​​​​      "quantity": "2"​​​​​
​​​​​    },​​​​​
​​​​​    {​​​​​
​​​​​      "name": "pot",​​​​​
​​​​​      "price": "29",​​​​​
​​​​​      "quantity": "3"​​​​​
​​​​​    }​​​​​
​​​​​  ]​​​​​
}
*/
