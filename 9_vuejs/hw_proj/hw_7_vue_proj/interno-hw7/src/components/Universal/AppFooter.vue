<template>
  <footer class="footer__bottom center">
    <div class="Interno">
      <h2 class="footer__bottom__header">
        <router-link to="/" class="footer__logo-link">
          <img src="@/assets/img/header_logo.svg" alt="logo" />Interno
        </router-link>
      </h2>
      <p class="footer__bottom__text"></p>
    </div>
    <div class="pages">
      <h2 class="pages__contacts__header">Страницы</h2>
      <div class="pages__contacts__text_cont">
      <router-link class="pages__contacts__text" to="/">Домой</router-link>
      <router-link class="pages__contacts__text" to="/project">Проект</router-link>
      <router-link class="pages__contacts__text" to="/blog">Блог</router-link>
      </div>
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
<style scoped>
.pages__contacts__text.router-link-exact-active {
  color: #cda274; /* Цвет активной ссылки */
  font-weight: bold;
}
</style>