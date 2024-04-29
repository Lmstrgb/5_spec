"use strict";

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

// Используем метод forEach
products.forEach(product => {
  product.price = product.price * 0.85; // уменьшаем цену на 15%
});
console.log(`Использовали метод forEach и получили:`);
// console.log(products);

products.forEach(product => {
  console.log(product);
});


// Используем обычный цикл
for (let i = 0; i < products.length; i++) {
  products[i].price = products[i].price / 0.85; // вернём цену на 15%
}
console.log(`Использовали цикл for и получили:`);
console.log(products);