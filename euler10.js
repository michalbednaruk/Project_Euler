/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

let primes = [];

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return n;
}

for (let i = 2; i <= 2_000_000; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}
//console.table(primes);

let sum = 0;
for (let i = 0; i < primes.length; i++) {
  sum += primes[i];
}

console.log(sum);
