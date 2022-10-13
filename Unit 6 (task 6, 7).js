// Task 6
const iphoneModels = [3, "4s", 5, "5s", 6, "6 plus", 7, null, "7 plus", 8, "iphone X", 12, 13];
for (let i = 0; i < iphoneModels.length; i++) {
  console.log(iphoneModels[i] === iphoneModels[i + 1]);
};

// Task 7
const countEvenOdd = function (iphoneModels) {
  let count = 0;
  for (let i = 0; i < iphoneModels.length; i++) {
    if (typeof iphoneModels[i] === 'number') {
      if (iphoneModels[i] % 2 === 0 && iphoneModels[i] !== 0) {
        console.log('Четное');
      }
      else if (iphoneModels[i] % 2 !== 0) {
        console.log('Нечетное');
      }
      else if (iphoneModels[i] === 0) {
        console.log('Это ноль!');
      }
    }
    else {
      console.log("Это не число!");
    }
  }
}
countEvenOdd(iphoneModels);