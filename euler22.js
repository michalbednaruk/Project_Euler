/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order.
Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

const fs = require("fs");

let text = fs.readFileSync(".\\p022_names.txt", "utf-8");
let newText = [];
text = text.split(",");

text.forEach((element) => {
  element = element.replace(/"/g, "");
  newText.push(element);
});

newText = newText.sort();
let newerText = [[]];

for (let i = 0; i < newText.length; i++) {
  let temp = [];
  for (let j = 0; j < newText[i].length; j++) {
    temp.push(newText[i].charCodeAt(j) - 64);
  }
  newerText.push(temp);
}
let sumOfWord = [];
for (let i = 0; i < newerText.length; i++) {
  let temp = [];
  let tempSum = 0;
  for (let j = 0; j < newerText[i].length; j++) {
    tempSum += newerText[i][j];
    temp.push(tempSum);
  }
  sumOfWord.push(tempSum);
}
let productOfWord = [];
for (let i = 0; i < sumOfWord.length; i++) {
  productOfWord.push(sumOfWord[i] * i);
}
let totalSum = 0;
for (let i = 0; i < productOfWord.length; i++) {
  totalSum += productOfWord[i];
}

console.log(totalSum);
