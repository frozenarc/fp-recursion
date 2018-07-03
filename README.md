# fp-recursion

Functional programming requires recursion instead of loop. Writing recursionn destracts sometimes developers from focusing more on business logic. So, to make use of recursion instead of loop and implement it easily the library can be used.

### Install

`npm install --save fp-recursion`

### Usage

`import { forEach, forLoop } from 'fp-recursion';`

OR

`const { forEach, forLoop } from 'fp-recursion';`


### Systax

* forEach

```
forEach(
    srcArray, // For each element of the source array the recursion executes
    target, // This can be any of type e.g. Array, Object, Primitive value. The value is passed to oprFunc and return value of               // oprFunc will be used as parameter to next call of oprFunc
    oprFunc, // The function will execute for each element of the source array
    idx, // Default value is 0. Index from which evaluation starts.
    incr // Default value is 1. Increment value to evaluate next element.
);
```

* oprFunc (forEach)

```
oprFunc(
    ele, // Element of source array
    target, // To be used to evaluate new value and return from the function
    idx // Currennt index
)
```

* forLoop