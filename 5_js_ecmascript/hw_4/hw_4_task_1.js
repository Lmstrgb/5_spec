
// https://jsonplaceholder.typicode.com/
// const myPromice = new Promise((resolve, reject) => { });

// myPromice.then((value) => { }).catch((error) => console.log("ошибка"));

const url1 = "https://jsonplaceholder.typicode.com/users";

// //шаблон 1
// fetch(url1).then((response) => console.log(response));
// fetch(url1)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(`ошибка ${error}`));
// //шаблон 2
// const getData = (url1) =>
//   new Promise((resolve, reject) => {
//     fetch(url1).then((response) =>
//       response
//         .json()
//         .then((data) => resolve(data))
//         .catch((error) => reject(error))
//     );
//   });

// getData("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

//
const getData2 = async (argUrl) => {
  try {
    // получение данных от сервера
    const res = await fetch(argUrl);
    //получене данных от res
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Ошибка при получении пользователей:', error);
  }
};
const fetchData = await getData2(url1);
displayUsers(fetchData);
console.log("----------------------");
console.log(fetchData);



// Функция для отображения пользователей на странице
function displayUsers(users) {
  const userList = document.querySelector('div.user-list');
  userList.innerHTML = ''; // Очистка списка перед добавлением новых элементов

  users.forEach((user) => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    userDiv.insertAdjacentHTML('beforeend', `
<div>
<p><strong>${user.id}.</strong> Логин: ${user.username}, имя: ${user.name}, email: ${user.email}</p>
<p>Cайт: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
<h4>Адрес:</h4>
<p>${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
<button class="delete-button" >Удалить</button>
</div>
`);

    userList.appendChild(userDiv);
  });
}

// Получаем все кнопки удаления
const deleteButtons = document.querySelectorAll('.delete-button');

// Добавляем обработчик события для каждой кнопки
deleteButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Находим родительский элемент карточки
    const employeeCard = this.parentElement;
    const employeeCard_1 = employeeCard.parentElement;
    // Удаляем карточку из DOM
    employeeCard.remove();
    employeeCard_1.remove();
  });
});

// Функция для удаления пользователя из списка, не работает
function deleteUser(button) {
  console.log(button);
  const userDiv = button.parentElement; // Получаем родительский элемент (div с пользователем)
  userDiv.remove(); // Удаляем элемент из DOM
}





