
let homeCnt = 0; // Счетчик просмотров для главной страницы
let aboutCnt = 0; // Счетчик просмотров для страницы "About"

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Запрос получен");
  if (req.url === "/") {
    homeCnt++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(`
      
        <h1>Мой сервер работает!</h1>
        <p>Количество просмотров главной страницы: ${homeCnt}</p>
        <a href="http://127.0.0.1:3005/about">Перейти на страницу About</a>`
    );

  } else if (req.url === "/about") {
    aboutCnt++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(

      `<h1>About</h1>
        <p>Количество просмотров страницы About: ${aboutCnt}</p>
        <a href="http://127.0.0.1:3005/">Вернуться на главную страницу</a>`
    );


  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("Page not found");
  }
});

const port = 3005;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});