<template>
  <header class="header center">
    <nav class="header__left">
      <a class="header__logo" href="#">
        <img src="@/assets/img/header_logo.svg" width="34" height="34" alt="logo" />
        <span class="header__left__text">Interno</span>
      </a>
    </nav>
    <nav class="header__right">
      <a class="header__right__link" href="#">Домой</a>
      <a class="header__right__link" href="#">Проект</a>
      <a class="header__right__link" href="#">Блог</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
