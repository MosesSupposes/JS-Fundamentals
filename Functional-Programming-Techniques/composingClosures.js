const compose = (...fns) => arg => (
    fns.reduceRight(
        (result, fn) => fn(result), arg
    )
);
        
const processWord = 
compose(hyphenate, revers, toUpperCase);

const processWordExplicit = word => hyphenate(reverse(toUpperCase(word)));

const words = ['hello', 'functional', 'programming'];

const newWords = words.map(processWord);

console.log(newWords); // ['OL-LEH', 'LANOI-TCNUF', 'GNIMM-ARGORP']
        
// This example expands on the contrived example from './advancedCurrying.js'.

customRequest({ url: '/cart/items' })
.then(map(
    compose(
        tax,
        discount,
        pluck('price')
    )
));
        
// Instead of iterating over the resolved promise value three seperate times, we can improve performance by composing the transformations into a single function, thus only having to iterate over a single mapping of our value.