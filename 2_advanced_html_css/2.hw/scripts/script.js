document.querySelector('.gamburger').addEventListener('click', function() {
  document.querySelector('.dropdown__menu').style.display = 'block';
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.gamburger')) {
      document.querySelector('.dropdown__menu').style.display = 'none';
  }
});