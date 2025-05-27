<template>
  <div>
    <section class="ProjectDetails__top__content"></section>

    <div class="ProjectDetails__mid__content__box">
      <h1 class="ProjectDetails__mid__content__box__header">{{ getH }}</h1>
      <p class="ProjectDetails__mid__content__box__text">{{ getT_1 }}</p>
      <p class="ProjectDetails__mid__content__box__text">{{ getT_2 }}</p>
    </div>
 
    <!-- Bootstrap Carousel -->
    <div class="center">
      <div id="projectCarousel" class="carousel slide" data-ride="carousel">
        <!-- Индикаторы (точки) -->
        <ol class="carousel-indicators">
          <li v-for="(slide, index) in slides" 
              :key="index" 
              data-target="#projectCarousel" 
              :data-slide-to="index"
              :class="{ active: index === 0 }"></li>
        </ol>
        
        <!-- Слайды -->
        <div class="carousel-inner">
          <div v-for="(slide, index) in slides" 
               :key="index" 
               class="carousel-item" 
               :class="{ active: index === 0 }">
            <img :src="slide.image" class="d-block w-100 image" alt="">
          </div>
        </div>
        
        <!-- Кнопки навигации -->
        <a class="carousel-control-prev" href="#projectCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#projectCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <!-- Кастомная пагинация (01, 02, 03) -->
    <!-- <div class="custom-pagination text-center mt-4">
      <span v-for="(slide, index) in slides" 
            :key="index" 
            @click="goToSlide(index)"
            :class="{ active: currentSlide === index }">
        {{ (index + 1).toString().padStart(2, '0') }}
      </span>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'ProjDetailsMain',
  data() {
    return {
      currentSlide: 0,
      slides: [
        { image: require('@/assets/img/imgProjDetails/Project_Details_Photo.png') },
        { image: require('@/assets/img/imgProjDetails/Project_Details_Photo_1.png') },
        { image: require('@/assets/img/imgProjDetails/Project_Details_Photo_2.png') }
      ]
    }
  },
  computed: {
    getH() { return this.$store.getters.getHeader },
    getT_1() { return this.$store.getters.getText_1 },
    getT_2() { return this.$store.getters.getText_2 }
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index
      $('#projectCarousel').carousel(index)
    }
  },
  mounted() {
    $('#projectCarousel').on('slide.bs.carousel', (event) => {
      this.currentSlide = event.to
    })
  }
}
</script>

<style lang="scss" scoped>
/* Ваши существующие стили */
.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}

.ProjectDetails__top__content {
    background: url('@/assets/img/imgProjDetails/Project_Details_background.jpg'), lightgray 50% / cover no-repeat;
    height: 351px;
    margin-bottom: 100px;
}

.ProjectDetails__mid__content__box {
    display: flex;
    padding-left: calc(50% - 330px);
    padding-right: calc(50% - 360px);
    // width: 658px;
    flex-direction: column;
    align-items: start;
    gap: 11px;
    margin-bottom: 103px;
    
    &__header {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
        
    
    }

    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
        text-align: start;
    }
}

.image {
    border-radius: 50px;
}

/* Кастомная пагинация */
.custom-pagination {
  span {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-family: Jost;
    font-size: 16px;
    color: #CDA274;
    
    &.active {
      color: #292F36;
      font-weight: bold;
    }
  }
}

/* Стили для стрелок */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #292F36;
  border-radius: 50%;
  padding: 15px;
  background-size: 50% 50%;
}

/* Стили для индикаторов */
.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #CDA274;
  
  &.active {
    background-color: #292F36;
  }
}
</style>