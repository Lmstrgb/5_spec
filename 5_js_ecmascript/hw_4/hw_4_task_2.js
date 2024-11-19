console.log(`Задание 2`);
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
const dogUrl = "https://dog.ceo/api/breeds/image/random";
const dogImagesContainer = document.querySelector('div.dog_images');

const getData2 = async (argUrl) => {
  try {
    // получение данных от сервера
    const res = await fetch(argUrl);
    //получене данных от res
    const data = await res.json();
    return data.message;
  } catch (error) {
    console.log('Ошибка при получении пользователей:', error);
  }
};
//const fetchData = await getData2(dogUrl);
// displayUsers(fetchData);
console.log("----------------------");
//console.log(fetchData);
//displayDogImage(fetchData);

// Функция для отображения изображения собаки
function displayDogImage(url) {
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Собака';
  dogImagesContainer.appendChild(img);
}



// Функция для получения и отображения 10 изображений с интервалом в 3 секунды
async function loadDogImages(urlArg) {
  for (let i = 0; i < 10; i++) {
    const fetchData = await getData2(dogUrl);
    const imageUrl = fetchData;
    displayDogImage(imageUrl);
    await new Promise(resolve => setTimeout(resolve, 3000)); // Ждем 3 секунды
  }
}

// Запускаем процесс загрузки изображений
loadDogImages(dogUrl);
