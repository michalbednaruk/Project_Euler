/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10001st prime number?
*/

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return n;
}

function calcPrime(spot) {
  let result = [];

  for (let i = 2; i <= 1000000; i++) {
    if (isPrime(i)) {
      result.push(i);
      if (result.length == spot + 1) {
        return result[spot - 1];
      }
    }
  }
  return "bruh";
}

console.log(calcPrime(10001));
