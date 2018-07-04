# fp-recursion

Functional programming requires recursion instead of loop. Writing recursion destracts sometimes developers from focusing more on business logic. So, to make use of recursion instead of loop and implement it easily the library can be used.

### Install

`npm install --save fp-recursion`

### Usage

`import { recurEach, recurTill } from 'fp-recursion';`

OR

`const { recurEach, recurTill } = require('fp-recursion');`

### recurEach

Iterates for each element of source array and generates new array / object / primitive value. 

* Systax 

```
recurEach(
    srcArray, // oprFunc will be called for each element of the source array
    idx, // Default value is 0. Index from which evaluation starts.
    incr // Default value is 1. Increment value to evaluate next element
).initVal( //The function accepts initial value
    value, // The value will be passed to oprFunc and the function should return new computed value which again will be passed to oprFunc on next iteration. The process continues untill recursion ends. The value can be any of type e.g. Array, Object, Primitive
).opr(
    oprFunc, // The function will be executed for each element of the source array, with initial value / computed value
);
```

* oprFunc

```
oprFunc(
    ele, // Element of source array
    value, // To be used to compute new value and the new valuue shoudl be returned from the function. The returned value will be passed here in next iteration
    idx, // Current index
    srcArray //Whole source array for handling some unexpected scenario
) // The function should return a new computed value
```

* Example

```
const srcArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resArr = recurEach(srcArr)
    .initVal([])
    .opr((val, arr) => [...arr, val + 1]);
console.log(resArr); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

There are two ways to pass initial value. 

1. You can pass it into `initVal`.
2. You can use default argument of `oprFunc` as shown below.

```
recurEach(srcArr)
    .opr((val, arr = []) => [...arr, val + 1]);
```
But, if source array is empty in that case second way will return `undefined` if you dont handle the case in `oprFunc`. So, first way is recommended to pass initial value.


### recurTill

Iterates for no. of count value and generates new array / object / primitive value. 

* Syntax

```
recurTill(
    count, // No. of times the oprFunc be called
    idx, // Default value is 0. Index from which evaluation starts.
    incr // Default value is 1. Increment value to evaluate next element
).initVal( //The function accepts initial value
    value, // The value will be passed to oprFunc and the function should return new computed value which again will be passed to next iteration of oprFunc. The process continues untill recursion ends. The value can be any of type e.g. Array, Object, Primitive
).opr(
    oprFunc, // The function will be executed for each index till count value
)
```

* oprFunc

```
oprFunc(
    idx, // Currennt index
    value, // To be used to compute new value and the new valuue shoudl be returned from the function. The returned value will be passed here in next iteration
    count // No. of times of recursion
) // The function should return a new computed value
```

* Example

```
const resArr = recurTill(10)
    .initVal([])
    .opr((idx, arr) => [...arr, idx * 2]);
console.log(resArr); //[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```
There are two ways to pass initial value. 

1. You can pass it into `initVal`.
2. You can use default argument of `oprFunc` as shown below.

```
recurTill(10)
    .opr((val, arr = []) => [...arr, val + 1]);
```
But, if count value is 0 in that case second way will return `undefined` if you dont handle the case in `oprFunc`. So, first way is recommended to pass initial value.


Please check test cases for more examples.