// const closureFunction = () => {

//   const cache = {};
//   return (x) => {
//     if (cache[x]) return cache[x];
//     const result = x * x;
//     cache[x] = result;
//     return result;
//   }
// }
// const chachedPow = closureFunction();
// chachedPow(2); // 4
// chachedPow(8); // 64
// chachedPow(2); 

// const houses = [];
// let i = 0;
// while (i < 10) {
//   let house = function () { // функция «дом»
//     console.log(i); // выводит номер дома
//   };
//   houses.push(house);
//   i++;
// }
// houses[0](); // 10 — у нулевого дома номер 10
// houses[7](); // 10 — и у седьмого дома номер 10

const houses = [];
let i = 0;
while (i < 10) {
  let houseNumber = i; // Здесь мы создаём блочную переменную,
  // которая сохранит значение i для конкретной итерации цикла, и
  // именно её значение попадёт в лексическое окружение функции house.
  let house = function () { // функция «дом»
    console.log(houseNumber); // выводит номер дома
  };
  houses.push(house);
  i++;
}
houses[0](); // 0 — у нулевого дома номер 0
houses[7](); // 7 — и у седьмого дома номер 7