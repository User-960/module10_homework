// Task 1
const alpha = + prompt('Some number');
console.log(typeof alpha);
if (isNaN(alpha)) {
  console.log('Нужно ввести число');
} else if (alpha % 2 === 0) {
  console.log(`${alpha} - Четное число`);
} else {
  console.log(`${alpha} - Нечетное число`);
};

// Task 2
let x;
x = 10;
if (typeof x === 'number') {
  console.log('x — число');
} else if (typeof x === 'string') {
  console.log('x — строка');
} else if (typeof x === 'boolean') {
  console.log('x — логический');
} else {
  console.log('Тип x не определён');
};