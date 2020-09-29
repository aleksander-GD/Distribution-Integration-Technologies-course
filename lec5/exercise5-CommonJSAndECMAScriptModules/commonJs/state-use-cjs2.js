const { getState, setState, reset } = require('./statecjs');

console.log(getState());
setState(1);
console.log(getState());
setState(2);
console.log(getState());
reset();
console.log(getState());