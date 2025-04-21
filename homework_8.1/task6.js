const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedList = [...numbersList];

sortedList.sort(function(a, b) {
  return a - b;
});

console.log("original array:", numbersList);
console.log("sorted array:", sortedList);