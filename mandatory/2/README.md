A `change` function
-------------------

Implement the function `change` in [change.mjs](change.mjs).

When given an integer input, `change` should return an array
representing the notes and coins (byttepenge) corresponding
to the input.

Your `change` implementation should support
 - 1000 kr notes
 - 500 kr notes
 - 200 kr notes
 - 100 kr notes
 - 50 kr notes
 - 20 kr coins
 - 10 kr coins
 - 5 kr coins
 - 2 kr coins
 - 1 kr coins

For example,
 - `change(12)` should return `[10,2]`
 - `change(123)` should return `[100,20,2,1]`
 - `change(1000)` should return `[1000]`
 - `change(0)` should return `[]`

[change.html](change.html) implements a little HTML GUI to test your implementation.

[test.mjs](test.mjs) contains a number of tests. To run these locally first install
the dependencies with `npm install` (in this directory). Then run the tests with
```
  npm test
```
