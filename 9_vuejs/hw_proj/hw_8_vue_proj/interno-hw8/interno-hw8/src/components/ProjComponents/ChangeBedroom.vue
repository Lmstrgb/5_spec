<template>
  <div>
      <div class="design__cards">
          <div class="design__card" v-for="{ id, img, text, header, date, arrow } in cards" :key="id">
              <img class="design__img" :src="img" alt="design">
              <p class="design__text">{{ text }}</p>
              <h2 class="design__card__header">{{ header }}</h2>
              <div class="design__card__bottom">
                  <p class="design__card__date">{{ date }}</p>
                  <a href="/project-details"><img :src="arrow" alt="arrow"></a>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'ChangeBedroom',

  data() {
      return {
          cards: [
              {
                  id: 1,
                  img: require('@/assets/img/imgProj/bedroom1.png'),
                  text: 'Bedroom Design',
                  header: 'Let’s Get Solution For Building Construction Work',
                  date: '26 December,2022',
                  arrow: require('@/assets/img/imgProj/arrow.svg'),
              },
              {
                  id: 2,
                  img: require('@/assets/img/imgProj/bedroom2.png'),
                  text: 'Bedroom Design',
                  header: 'Let’s Get Solution For Building Construction Work',
                  date: '26 December,2022',
                  arrow: require('@/assets/img/imgProj/arrow.svg'),
              },
              {
                  id: 3,
                  img: require('@/assets/img/imgProj/bedroom3.png'),
                  text: 'Bedroom Design',
                  header: 'Let’s Get Solution For Building Construction Work',
                  date: '26 December,2022',
                  arrow: require('@/assets/img/imgProj/arrow.svg'),
              },
              {
                  id: 4,
                  img: require('@/assets/img/imgProj/bedroom4.png'),
                  text: 'Bedroom Design',
                  header: 'Let’s Get Solution For Building Construction Work',
                  date: '26 December,2022',
                  arrow: require('@/assets/img/imgProj/arrow.svg'),
              },
              {
                  id: 5,
                  img: require('@/assets/img/imgProj/bedroom5.png'),
                  text: 'Bedroom Design',
                  header: 'Let’s Get Solution For Building Construction Work',
                  date: '26 December,2022',
                  arrow: require('@/assets/img/imgProj/arrow.svg'),
              },
              {
                  id: 6,
                  img: require('@/assets/img/imgProj/bedroom6.png'),
                  text: 'Bedroom Design',
                  header: 'Let’s Get Solution For Building Construction Work',
                  date: '26 December,2022',
                  arrow: require('@/assets/img/imgProj/arrow.svg'),
              }]

      };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style scoped>
.design__cards {
  display: grid;
  grid-template-columns: repeat(2, 600px);
  padding: 48px;
  justify-content: center;
  align-items: center;
}
</style>