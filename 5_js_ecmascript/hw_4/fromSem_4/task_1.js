
// https://jsonplaceholder.typicode.com/
// const myPromice = new Promise((resolve, reject) => { });

// myPromice.then((value) => { }).catch((error) => console.log("ошибка"));

const url1 = "https://jsonplaceholder.typicode.com/users";

//шаблон 1
fetch(url1).then((response) => console.log(response));
fetch(url1)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(`ошибка ${error}`));
//шаблон 2
const getData = (url1) =>
  new Promise((resolve, reject) => {
    fetch(url1).then((response) =>
      response
        .json()
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    );
  });

// getData("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

//
// const getData2 = async (argUrl) => {
//   try {
//     // получение данных от сервера
//     const res = await fetch(argUrl);
//     //получене данных от res
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const fetchData = await getData2(url1);
// console.log("----------------------");
// console.log(fetchData);


