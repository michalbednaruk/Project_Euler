/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


function factor(num) {
  result = [];
  if (num == 2) {
    result.push(2);
    return result;
  }

  for (let i = 3; i < Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(factor(600851475143));
