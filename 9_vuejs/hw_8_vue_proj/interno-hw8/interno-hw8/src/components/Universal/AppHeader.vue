<template>
  <header class="header center">
    <nav class="header__left">
      <router-link class="header__logo" to="/">
        <img src="@/assets/img/header_logo.svg" width="34" height="34" alt="logo" />
        <span class="header__left__text">Interno</span>
      </router-link>
    </nav>
    <nav class="header__right">
      <router-link class="header__right__link" to="/">Домой</router-link>
      <router-link class="header__right__link" to="/project">Проект</router-link>
      <router-link class="header__right__link" to="/blog">Блог</router-link>
      <!-- <router-link class="header__right__link" to="/project-details">Детали проекта</router-link> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.header__right__link.router-link-exact-active {
  color: #cda274; /* Цвет активной ссылки */
  font-weight: bold;
}
</style>
