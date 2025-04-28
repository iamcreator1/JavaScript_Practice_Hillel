const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce(function(total, current) {
  return total + current;
}, 0);

console.log("sum of numbers:", sum);