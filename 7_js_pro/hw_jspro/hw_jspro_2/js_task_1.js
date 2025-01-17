class Library {
  #books;

  constructor(initialBooks = []) {
    // Проверяем, что массив не содержит дубликатов
    const uniqueBooks = new Set(initialBooks);
    if (uniqueBooks.size !== initialBooks.length) {
      throw new Error('Initial book list contains duplicates.');
    }

    this.#books = Array.from(uniqueBooks);
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Книга с таким названием "${title}" уже существует в библиотеке.`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книга "${title}" не существует в библиотеке.`);
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

// Пример использования
try {
  const myLibrary = new Library(['Братья Карамазовы', 'Пираты карибского моря']);
  console.log(myLibrary.allBooks);

  myLibrary.addBook('Морозко');
  console.log(myLibrary.allBooks);

  console.log(myLibrary.hasBook('Морозко')); // true
  console.log(myLibrary.hasBook('Терминатор')); // false

  myLibrary.removeBook('Пираты карибского моря');
  console.log(myLibrary.allBooks);

  // Попробуем добавить дубликат
  myLibrary.addBook('Братья Карамазовы'); // выбросит ошибку
} catch (error) {
  console.error(error.message);
}
finally {
  console.error(`Операция выполнена`);
}
