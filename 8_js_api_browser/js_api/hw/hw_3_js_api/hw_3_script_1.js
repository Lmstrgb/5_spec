const photoContainerEl = document.getElementById('photo-container');
const photoEl = document.getElementById('photo');
const photographerEl = document.getElementById('photographer');
const likeButtonEl = document.getElementById('like-button');
const dislikeButtonEl = document.getElementById('dislike-button');
const likeCounterEl = document.getElementById('like-counter');
const historyEl = document.getElementById('history');
const delHistoryBtn = document.querySelector('.button-del');

let currentPhotoId = '';
let likeCount = 0;

// Коллекция для хранения лайков по ID фото
const likesCollection = {};

// Получаем случайное изображение
async function fetchRandomPhoto() {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 362587eoy9AFURsnHwx7sl2vS3JtG76Pp6J5Et5mk2M',
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка, статус сервера ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Обновляем интерфейс с данными о фото
function updateUI(photo) {
  currentPhotoId = photo.id;

  photoEl.src = photo.urls.regular;
  photographerEl.textContent = `Фото от: ${photo.user.name}`;

  // Проверяем коллекцию на наличие лайков
  likeCount = likesCollection[currentPhotoId] || 0;
  likeCounterEl.textContent = likeCount;

  // Добавляем фото в историю
  addToHistory(photo);
}

// Обработчик лайка
function handleLike() {
  likeCount++;
  likesCollection[currentPhotoId] = likeCount; // Сохраняем количество лайков в коллекции
  likeCounterEl.textContent = likeCount;

  // Обновляем историю
  updateHistory(currentPhotoId, likeCount);
}

// Обработчик дизлайка
function handleDislike() {
  if (likeCount > 0) {
    likeCount--;
    likesCollection[currentPhotoId] = likeCount; // Сохраняем количество лайков в коллекции
    likeCounterEl.textContent = likeCount;

    // Обновляем историю
    updateHistory(currentPhotoId, likeCount);
  }
}

// Добавляем фото в историю
function addToHistory(photo) {
  const history = JSON.parse(localStorage.getItem('history')) || [];

  // Проверяем, есть ли уже это фото в истории
  const existingPhotoIndex = history.findIndex(item => item.id === photo.id);

  if (existingPhotoIndex === -1) {
    // Если фото нет, добавляем его в историю
    history.push({ id: photo.id, userName: photo.user.name, likes: likeCount });
  } else {
    // Если фото уже есть, обновляем количество лайков
    history[existingPhotoIndex].likes = likesCollection[photo.id] || 0;
  }

  localStorage.setItem('history', JSON.stringify(history));
  renderHistory(history);
}

// Обновляем историю с новым количеством лайков
function updateHistory(photoId, newLikes) {
  const history = JSON.parse(localStorage.getItem('history')) || [];

  const existingPhotoIndex = history.findIndex(item => item.id === photoId);

  if (existingPhotoIndex > -1) {
    history[existingPhotoIndex].likes = newLikes;

    localStorage.setItem('history', JSON.stringify(history));
    renderHistory(history);
  }
}

// Отображаем историю просмотренных изображений
function renderHistory(history) {
  historyEl.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('history-item');
    li.textContent = `${item.userName} - Понравилось: ${item.likes}`;
    historyEl.appendChild(li);
  });
}

// Основная функция
async function main() {
  const randomPhoto = await fetchRandomPhoto();
  updateUI(randomPhoto);
}

likeButtonEl.addEventListener('click', handleLike);
dislikeButtonEl.addEventListener('click', handleDislike);
document.addEventListener('DOMContentLoaded', main);


delHistoryBtn.addEventListener('click', function () {
  localStorage.removeItem('history');
  console.log('История удалена из localStorage!');

});
