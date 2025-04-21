const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

console.log("amount of positive numbers:", positiveCount);
console.log("amount of negative numbers:", negativeCount);
console.log("number of zeros:", zeroCount);