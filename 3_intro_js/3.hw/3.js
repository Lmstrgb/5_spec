"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const num1 = +prompt(`Введите первое число`);
const num2 = +prompt(`Введите второе число`);
const num3 = +prompt(`Введите третье число`);



function maxFunc(num1, num2, num3) {
  let bufNum = num1;
  if (num1 < num2) { bufNum = num2 }
  if (num2 < num3) { bufNum = num3 }
  return bufNum;
}


console.log(`Максимально число из трёх введённых: ${num1}, ${num2}, ${num3} - это ${maxFunc(num1, num2, num3)}`);
