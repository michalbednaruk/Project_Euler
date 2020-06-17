/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

function factorial(n) {
  if (n === 1) return 1;
  n = n * factorial(n - 1);
  return n;
}

let answer = [];

for (let i = 3; i < 150; i++) {
    number = i.toString()
  for (let j = 0; j < number.length; j++) {
    let temp = [];
    temp.push(factorial(parseInt(number[j])));
    for (let k = 0; k < temp.length; k++) {
      let sum = 0;
      sum += temp[k];
      if (sum === parseInt(number)) answer.push(sum);
    }
  }
}

console.table(answer)
