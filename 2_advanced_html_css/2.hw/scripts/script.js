document.querySelector('.header__button').addEventListener('click', function() {
  document.querySelector('.dropdown__menu').style.display = 'block';
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.header__button')) {
      document.querySelector('.dropdown__menu').style.display = 'none';
  }
});