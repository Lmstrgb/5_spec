// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

const Book = {
  // Определяем свойства класса
  title: '',
  author: '',
  pages: 0,

  // Метод для отображения информации о книге
  displayInfo: function (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    console.log(`Название: ${this.title}`);
    console.log(`Автор: ${this.author}`);
    console.log(`Количество страниц: ${this.pages}`);
  }
}

// const book1 = Object.create(Book);
// book1.displayInfo("Война и Мир", "Толстой Л.Н.", 5000);

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
  constructor(name, age, grade) {
    this.name = name; // Имя студента
    this.age = age;   // Возраст студента
    this.grade = grade; // Класс, в котором учится студент
  }

  displayInfo() {
    console.log(`Имя: ${this.name}`);
    console.log(`Возраст: ${this.age}`);
    console.log(`Класс: ${this.grade}`);
  }
}

const student1 = new Student("Петров Николай", 14, "5-ый");
student1.displayInfo();

const student2 = new Student("Николаев Сергей", 16, "7-ый");
student2.displayInfo();