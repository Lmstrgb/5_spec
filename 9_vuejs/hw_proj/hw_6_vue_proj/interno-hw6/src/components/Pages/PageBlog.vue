<template>
  <main>
    <section class="blog__top__content">
      <div class="blog__top__content__box">
        <h1 class="blog__top__content__box__header">Статьи & Новости</h1>
        <p class="blog__top__content__box__text">Домой / Блог</p>
      </div>
    </section>
    <section class="blog__mid__content center">
      <h1 class="blog__mid__content__header">Последний пост</h1>
      <div class="blog__mid__content__box">
        <img class="blog__mid__content__box__img" src="@/assets/img/blog_latest_post.png" alt="photo">
        <div class="blog__mid__content__box__right">
          <h1 class="blog__mid__content__box__right__header">Low Cost Latest Invented Interior Designing Ideas
          </h1>
          <p class="blog__mid__content__box__right__text">С того времени этот, похожий на латинский, текст стал
            стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных
            издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С
            появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ
            обозначения расположения текста на странице.</p>
          <div class="blog__mid__content__box__right__bottom">
            <p class="blog__mid__content__box__right__bottom__text">26 декабря,2022</p>
            <a href="#"><img src="@/assets/img/arrow.svg" alt="arrow"></a>
          </div>
        </div>
      </div>
    </section>

    <section class="blog__bottom__content center" id="app">
      <h1 class="blog__bottom__content__header">Статьи & Новости</h1>

      <div class="blog__cards">
      <div class="design__card" v-for="post in cards" :key="post.id" @click="goToPostDetails(post.id)">
        <img class="design__img" :src="post.img" alt="design">
        <p class="design__text">{{post.text}}</p>
        <h2 class="design__card__header">{{post.header}}</h2>
        <div class="design__card__bottom">
          <p class="design__card__date">{{post.date}}</p>
          <a href="#"><img :src="post.arrow" alt="arrow"></a>
        </div>
      </div>
    </div>

    </section>

    <nav>
      <ul class="pagination">
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg><span class="pagination__number">01</span></a></li>
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg><span class="pagination__number">02</span></a></li>
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg><span class="pagination__number">03</span></a></li>
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg></a></li>
      </ul>
    </nav>
    
  </main>
</template>

<script>
import { posts } from '@/data/dataBlog/dataBlogPosts.js'
export default {
  name: 'PageBlog',
  data() {
    return {
      cards: posts // Используем импортированные данные
    }
  },
  // data() {
  //       return {
  //           cards: [
  //               {
  //                   id: 1,
  //                   img: require('@/assets/img/design1.png'),
  //                   text: 'Дизайн кухни',
  //                   header: 'Let’s Get Solution For Building Construction Work',
  //                   date: '26 December,2022',
  //                   arrow: require('@/assets/img/arrow.svg'),
  //               },
  //               {
  //                   id: 2,
  //                   img: require('@/assets/img/design2.png'),
  //                   text: 'Дизайн для жизни',
  //                   header: 'Let’s Get Solution For Building Construction Work',
  //                   date: '26 December,2022',
  //                   arrow: require('@/assets/img/arrow.svg'),
  //               },
  //               {
  //                   id: 3,
  //                   img: require('@/assets/img/design3.png'),
  //                   text: 'Дизайн интерьера',
  //                   header: 'Let’s Get Solution For Building Construction Work',
  //                   date: '26 December,2022',
  //                   arrow: require('@/assets/img/arrow.svg'),
  //               },
  //               {
  //                   id: 4,
  //                   img: require('@/assets/img/design4.png'),
  //                   text: 'Дизайн кухни',
  //                   header: 'Let’s Get Solution For Building Construction Work',
  //                   date: '26 December,2022',
  //                   arrow: require('@/assets/img/arrow.svg'),
  //               },
  //               {
  //                   id: 5,
  //                   img: require('@/assets/img/design5.png'),
  //                   text: 'Дизайн для жизни',
  //                   header: 'Let’s Get Solution For Building Construction Work',
  //                   date: '26 December,2022',
  //                   arrow: require('@/assets/img/arrow.svg'),
  //               },
  //               {
  //                   id: 6,
  //                   img: require('@/assets/img/design6.png'),
  //                   text: 'Дизайн интерьера',
  //                   header: 'Let’s Get Solution For Building Construction Work',
  //                   date: '26 December,2022',
  //                   arrow: require('@/assets/img/arrow.svg'),
  //               }]

  //       };
  //   },
  methods: {
    goToPostDetails(postId) {
      this.$router.push({ name: 'blogDetails', params: { id: postId } })
    }
  }

}
</script>

<style scoped>
/* @import '@/assets/styles/styleProject.css'; */
</style>