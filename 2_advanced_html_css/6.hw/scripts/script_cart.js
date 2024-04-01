//document.querySelector('.footer').style.marginTop = '128px';

window.addEventListener('resize', function() {
  if (window.innerWidth <= 420) {
      document.querySelector('.footer').style.marginTop = '96px';
  } else {
      document.querySelector('.footer').style.marginTop = '128px';
  }
});