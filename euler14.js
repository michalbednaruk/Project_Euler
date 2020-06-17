// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const { performance } = require("perf_hooks");
let t0 = performance.now();
function collatz(n, collatzAnswer) {
  collatzAnswer.push(n);
  if (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      collatz(n, collatzAnswer);
    } else {
      n = 3 * n + 1;
      collatz(n, collatzAnswer);
    }
  }
  return collatzAnswer;
}
let firstNumber = 0;
let arrayLength = 0;
for (let i = 999_999; i >= 1; i--) {
  let collatzAnswer = [];
  let pizza = collatz(i, collatzAnswer);
  if (pizza.length > arrayLength) {
    firstNumber = pizza[0];
    arrayLength = pizza.length;
  }
  if (i === 1) {
    console.log(firstNumber);
    console.log(arrayLength);
  }
}
let t1 = performance.now();

console.log(t1 - t0 + "ms");
