document.getElementById('addReview').addEventListener('click', addReview);

function addReview() {
  const productName = document.getElementById('productName').value.trim();
  const reviewText = document.getElementById('reviewText').value.trim();

  if (productName === '' || reviewText === '') {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

  if (!reviews[productName]) {
    reviews[productName] = [];
  }

  reviews[productName].push(reviewText);

  localStorage.setItem('reviews', JSON.stringify(reviews));

  document.getElementById('productName').value = '';
  document.getElementById('reviewText').value = '';

  displayReviews();
}

function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
  const productList = document.getElementById('productList');

  productList.innerHTML = '';

  for (const product in reviews) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.textContent = product;
    productDiv.onclick = () => showReviews(product);

    productList.appendChild(productDiv);
  }
}

function showReviews(productName) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

  const reviewList = document.createElement('div');
  reviewList.classList.add('review');

  reviews[productName].forEach((review, index) => {
    const reviewDiv = document.createElement('div');
    reviewDiv.textContent = review;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => deleteReview(productName, index);

    reviewDiv.appendChild(deleteButton);
    reviewList.appendChild(reviewDiv);
  });

  const existingReviewList = document.querySelector('.review');
  if (existingReviewList) {
    existingReviewList.remove();
  }

  document.getElementById('productList').appendChild(reviewList);
}

function deleteReview(productName, index) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

  reviews[productName].splice(index, 1);

  if (reviews[productName].length === 0) {
    delete reviews[productName];
  }

  localStorage.setItem('reviews', JSON.stringify(reviews));

  displayReviews();
}

// Отображение отзывов при загрузке страницы
window.onload = displayReviews;