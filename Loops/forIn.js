let moses = { 
                name: 'Moshi',
                age: 20,
                swagLevel: 100,
                isSexy: true
            };


function printAttributesOf(obj) {
    
    for (attribute in obj) {
        console.log(`${attribute}: ${obj[attribute]} `);
    }

}
printAttributesOf(moses);