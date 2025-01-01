const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const COUNTER_FILE = path.join(__dirname, 'counter.json');

//console.log(`Счётчик: ${COUNTER_FILE}`);

// Функция для загрузки счетчиков из файла
function loadCounters() {
  if (fs.existsSync(COUNTER_FILE)) {
    const data = fs.readFileSync(COUNTER_FILE);
    return JSON.parse(data);
  }
  return { '/': 0, '/about': 0 }; // начальные значения счетчиков
}

// Функция для сохранения счетчиков в файл
function saveCounters(counters) {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify(counters, null, 2));
}

let counters = loadCounters();
console.log(`Из текстового файла: ${counters['/']} и ${counters['/about']} `);

// Обработчик для главной страницы "/"
app.get('/', (req, res) => {
  counters['/'] += 1; // увеличиваем счетчик
  saveCounters(counters); // сохраняем в файл
  res.send(`<h1>Главная страница</h1><p>Количество просмотров: ${counters['/']}</p>`);
});

// Обработчик для страницы "/about"
app.get('/about', (req, res) => {
  counters['/about'] += 1; // увеличиваем счетчик
  saveCounters(counters); // сохраняем в файл
  res.send(`<h1>О нас</h1><p>Количество просмотров: ${counters['/about']}</p>`);
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});