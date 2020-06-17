/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

let result = [];
let number;

for (let i = 999; i >= 100; i--) {
  for (let j = 999; j >= 100; j--) {
    number = i * j;
    number = number.toString();
    if (
      number[0] === number[5] &&
      number[1] === number[4] &&
      number[2] === number[3]
    ) {
      result.push(parseInt(number));
    }
  }
}

console.table(result.sort());
