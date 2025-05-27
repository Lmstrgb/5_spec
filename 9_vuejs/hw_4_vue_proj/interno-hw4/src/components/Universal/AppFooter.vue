<template>
  <footer class="footer__bottom center">
    <div class="Interno">
      <h2 class="footer__bottom__header">
        <img src="@/assets/img/header_logo.svg" alt="logo" />Interno
      </h2>
      <p class="footer__bottom__text"></p>
    </div>
    <div class="pages">
      <h2 class="pages__contacts__header">Страницы</h2>
      <a class="pages__contacts__text" href="#">Домой</a>
      <a class="pages__contacts__text" href="#">Проект</a>
      <a class="pages__contacts__text" href="#">Блог</a>
    </div>
    <div class="contacts">
      <h2 class="pages__contacts__header">Контакты</h2>
      <p class="pages__contacts__text">
        55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com
        (123) 456 - 7890
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
