/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let result;

function test(num) {
  for (let i = 20; i >= 1; i--) if (num % i !== 0) return false;
  return true;
}

for (let j = 1; !result; j++) if (test(j)) result = j;

console.log(result);
