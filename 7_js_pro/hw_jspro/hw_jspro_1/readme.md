## Задание 1

Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.

Каждый альбом имеет следующую структуру: </br>

```javascript
{
    title: "Название альбома",
    artist: "Исполнитель",
    year: "Год выпуска"
}
```

Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

Название альбома - Исполнитель (Год выпуска)

##  Задание 2

Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.</br>
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

**Повара и их специализации:**

Виктор - специализация: Пицца.</br>
Ольга - специализация: Суши.</br>
Дмитрий - специализация: Десерты.</br>

**Блюда и их повара:**

Пицца "Маргарита" - повар: Виктор.</br>
Пицца "Пепперони" - повар: Виктор.</br>
Суши "Филадельфия" - повар: Ольга.</br>
Суши "Калифорния" - повар: Ольга.</br>
Тирамису - повар: Дмитрий.</br>
Чизкейк - повар: Дмитрий.</br>

**Заказы:**

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.</br>
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".</br>
Клиент Ирина заказала: Чизкейк.</br>
