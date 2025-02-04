const initialData = [
  {
      product: "Apple iPhone 13",
      reviews: [
          {
              id: "1",
              text: "Отличный телефон! Батарея держится долго.",
          },
          {
              id: "2",
              text: "Камера супер, фото выглядят просто потрясающе.",
          },
      ],
  },
  {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
          {
              id: "3",
              text: "Интересный дизайн, но дорогой.",
          },
      ],
  },
  {
      product: "Sony PlayStation 5",
      reviews: [
          {
              id: "4",
              text: "Люблю играть на PS5, графика на высоте.",
          },
      ],
  },
];

function displayReviews() {
  const reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML = ''; // Очистить контейнер перед добавлением

  initialData.forEach(item => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('review');

      const productTitle = document.createElement('h3');
      productTitle.textContent = item.product;
      productDiv.appendChild(productTitle);

      item.reviews.forEach(review => {
          const reviewText = document.createElement('p');
          reviewText.textContent = review.text;
          productDiv.appendChild(reviewText);
      });

      reviewContainer.appendChild(productDiv);
  });
}

function addReview(product, reviewText) {
  if (reviewText.length < 50 || reviewText.length > 500) {
      throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
  }

  const productIndex = initialData.findIndex(item => item.product === product);
  if (productIndex === -1) {
      initialData.push({ product, reviews: [{ id: Date.now().toString(), text: reviewText }] });
  } else {
      initialData[productIndex].reviews.push({ id: Date.now().toString(), text: reviewText });
  }

  displayReviews();
}

document.getElementById('submit').addEventListener('click', () => {
  const productInput = document.getElementById('product').value.trim();
  const reviewInput = document.getElementById('review').value.trim();

  try {
      addReview(productInput, reviewInput);
      document.getElementById('product').value = '';
      document.getElementById('review').value = '';
  } catch (error) {
      alert(error.message);
  }
});

// Инициализация отображения отзывов при загрузке страницы
displayReviews();