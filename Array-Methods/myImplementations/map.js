function map(arr, transormFn, context) {
    const transformedArray = []
    arr.forEach(index => {
        transformedArray.push(transormFn.call(context, index))
    })
    return transformedArray
}

// transform function to be used for test
function double(number) {
    return number * 2
}

// test
map([1,2,3,4,5], double) // [2,4,6,8,10]