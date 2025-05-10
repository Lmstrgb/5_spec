<template>
  <div>
    <main class="center">
    <section class="top__content content__top">
      <h1 class="top__content__header">Пусть ваш дом будет уникальным</h1>
      <p class="top__content__text">Существует много вариаций Lorem Ipsum, которые можно использовать</p>
      <button class=" top__content__button"><span class="top__content__button__text">Начать</span> <span
          class="top__content__button__img"><img src="@/assets/img/Vector.svg" alt="top__content__button__img"></span></button>
    </section>
    <section class="mid__content__description">
      <h1 class="mid__content__description__header">Следите за нашими проектами</h1>
      <p class="mid__content__description__text">Хорошо известно, что читатель будет отвлекаться на читабельный контент
        страницы</p>
    </section>
    <section class="mid__content">
      <div class="product__card">
        <img class="border-top-right-radius" src="@/assets/img/kitchan1.png" alt="kitchan1">
        <div class="product__card__content">
          <div class="product__card__content__left">
            <h3 class="product__card__header">Современная кухня</h3>
            <p class="product__card__text">Декор / Планировка</p>
          </div>
          <a class="product__card__content__right" href="#"><img src="@/assets/img/arrow.svg" alt="arrow"></a>
        </div>
      </div>
      <div class="product__card">
        <img class="border-top-left-radius" src="@/assets/img/kitchan2.png" alt="kitchan1">
        <div class="product__card__content">
          <div class="product__card__content__left">
            <h3 class="product__card__header">Современная кухня</h3>
            <p class="product__card__text">Декор / Планировка</p>
          </div>
          <a class="product__card__content__right" href="#"><img src="@/assets/img/arrow.svg" alt="arrow"></a>
        </div>
      </div>
      <div class="product__card">
        <img class="border-bottom-right-radius" src="@/assets/img/kitchan3.png" alt="kitchan1">
        <div class="product__card__content">
          <div class="product__card__content__left">
            <h3 class="product__card__header">Современная кухня</h3>
            <p class="product__card__text">Декор / Планировка</p>
          </div>
          <a class="product__card__content__right" href="#"><img src="@/assets/img/arrow.svg" alt="arrow"></a>
        </div>
      </div>
      <div class="product__card">
        <img class="border-bottom-left-radius" src="@/assets/img/kitchan4.png" alt="kitchan1">
        <div class="product__card__content">
          <div class="product__card__content__left">
            <h3 class="product__card__header">Современная кухня</h3>
            <p class="product__card__text">Декор / Планировка</p>
          </div>
          <a class="product__card__content__right" href="#"><img src="@/assets/img/arrow.svg" alt="arrow"></a>
        </div>
      </div>
    </section>

    <section class="footer__top">
      <div class="footer__top__box">
        <h1 class="footer__top__box__quantity">12</h1>
        <p class="footer__top__box__text">Лет опыта</p>
      </div>
      <div class="footer__top__box">
        <h1 class="footer__top__box__quantity">85</h1>
        <p class="footer__top__box__text">Успешных проектов</p>
      </div>
      <div class="footer__top__box">
        <h1 class="footer__top__box__quantity">15</h1>
        <p class="footer__top__box__text">Проектов в работе</p>
      </div>
      <div class="footer__top__box">
        <h1 class="footer__top__box__quantity">95</h1>
        <p class="footer__top__box__text">Счастливых клиентов</p>
      </div>
    </section>
    <section class="footer__mid__description">
      <h1 class="footer__mid__description__header">Статьи & Новости</h1>
      <p class="footer__mid__description__text">Хорошо известно, что читатель будет отвлекаться на читабельный контент
        страницы.</p>
    </section>
    <section class="footer__mid">
      <div class="design__card">
        <img class="design__img" src="@/assets/img/design1.png" alt="design1">
        <p class="design__text">Дизайн кухни</p>
        <h2 class="design__card__header">Создадим лучший макет перепланировки</h2>
        <div class="design__card__bottom">
          <p class="design__card__date">26 Декабря, 2022</p>
          <a href="#"><img src="@/assets/img/arrow.svg" alt="arrow"></a>
        </div>
      </div>
      <div class="design__card">
        <img class="design__img" src="@/assets/img/design2.png" alt="design1">
        <p class="design__text">Дизайн для жизни</p>
        <h2 class="design__card__header">Лучшие интерьерные идеи по низкой цене.</h2>
        <div class="design__card__bottom">
          <p class="design__card__date">22 Декабря, 2022</p>
          <a href="#"><img src="@/assets/img/arrow.svg" alt="arrow"></a>
        </div>
      </div>

      <div class="design__card">
        <img class="design__img" src="@/assets/img/design3.png" alt="design1">
        <p class="design__text">Дизайн интерьера</p>
        <h2 class="design__card__header">Лучшие интерьерные решения для офисов</h2>
        <div class="design__card__bottom">
          <p class="design__card__date">26 December,2022</p>
          <a href="#"><img src="@/assets/img/arrow.svg" alt="arrow"></a>
        </div>
      </div>
    </section>
  </main>
</div>
</template>

<script>
export default {
  name: 'PageHome',
  components: {
  }
}
</script>

<style scoped>
@import '@/assets/styles/styleProject.css';
</style>