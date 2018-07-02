const { forEach, forLoop } = require('./index')

console.log(
    forEach(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
        [], 
        (val, arr) => [...arr, val + 1]
    )
);

console.log(
    forLoop(
        10, 
        [], 
        (arr, idx, count) => [...arr, idx * 2]
    )
);
