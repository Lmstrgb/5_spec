"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/


const mass = [];

for (let i = 0; i < 5; i++) {
  mass.push(Math.trunc(Math.random() * 10));
}
console.log(`Сгенерированный массив: ${mass}`);


function summa(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ = summ + arr[i];
  }
  console.log(`Сумма элементов массива ${arr} = ${summ}`);
}


function minVal(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(`Минимальный элемент массива ${arr}, найденный методом 1 = ${min}`);
}

function indexThree(arr) {
  let indexesOfThree = [];
  arr.forEach((element, index) => {
    if (element === 3) {
      indexesOfThree.push(index);
    }
  });
  console.log(`Массив из индексов ранее сгенерированного массива ${arr}, значения которых = 3: ${indexesOfThree}`);
}

summa(mass);
minVal(mass);
// Можно сделать таким образом
const min = Math.min(...mass);
console.log(`Минимальный элемент массива ${mass}, найденный методом 2 = ${min}`);

indexThree(mass);



