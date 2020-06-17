/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
let answer = [];

for (let i = 0; i <= 1000; i++) {
  for (let j = 0; j <= 1000; j++) {
    for (let k = 0; k <= 1000; k++) {
      if (i + j + k == 1000) {
        if (i < j && j < k) {
          if (i ** 2 + j ** 2 == k ** 2) {
            answer.push(i);
            answer.push(j);
            answer.push(k);
          }
        }
      }
    }
  }
}
console.table(answer);
console.log(answer[0] * answer[1] * answer[2]);
