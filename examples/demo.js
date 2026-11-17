const {
    canCreateBalancedSequence
} = require('../src/balanced-sequence');

const {
    createLargestIdentifier
} = require('../src/largest-identifier');

// Utility 1: Balanced Sequence Planner
console.log('--- Balanced Sequence Planner ---');

console.log(
    canCreateBalancedSequence([1, 1, 2])
); // true

console.log(
    canCreateBalancedSequence([1, 1, 4, 5])
); // false

console.log(
    canCreateBalancedSequence([5, 5, 5, 5])
); // true


// Utility 2: Maximum Identifier Composer
console.log('\n--- Maximum Identifier Composer ---');

console.log(
    createLargestIdentifier([10, 2])
); // "210"

console.log(
    createLargestIdentifier([3, 30, 34, 5, 9])
); // "9534330"

console.log(
    createLargestIdentifier([0, 0])
); // "0"
