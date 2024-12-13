//1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

// const arr = [3, 10, 5, 7, 9];
// const min = Math.min(...arr);

// console.log("Минимальное число: " + min);


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// function createCounter() {
//   let count = 0; // Счетчик, доступный только внутри функции

//   return {
//     increment() {
//       count += 1;
//       return count;
//     },
//     decrement() {
//       count -= 1;
//       return count;
//     },
//     getValue: function () {
//       return count;
//     }
//   };
// }

// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.increment()); // 3
// console.log(counter.decrement()); // 2
// console.log(counter.getValue());   // 2


