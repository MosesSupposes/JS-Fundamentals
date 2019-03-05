function reduce(arr, reducerFn, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue
    for (let i = 0; i < arr.length; i++) {
        if (accumulator !== undefined) 
            accumulator = reducerFn(accumulator, arr[i], i, arr)
        else 
            accumulator = arr[i]
    }
    return accumulator
}

// reducer function to use for test
function sumOf(acc, cur) {
    return acc + cur
}

// test
reduce([1,2,3,4,5], sumOf) // 15
reduce([1,2,3,4,5], sumOf, 2) // 17

