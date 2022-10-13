// Task 3
let strReverse = "Hello";
console.log(strReverse.split("").reverse().join(""));

// Task 4
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomNum(0, 100));