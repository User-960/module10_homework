// Task 8
let myMap = new Map([
  ["email", "volodinivan@mail.ru"],
  ["url", "https://example.com"],
  ["country", "Russia"]
]);
for (let elem of myMap) {
  console.log(`Ключ - ${elem[0]} : Значение - ${elem[1]}`);
};