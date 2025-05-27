<template>
  <div>
    <h3>Вот такое странное задание из разряда "додумай сам"</h3>
      <div v-if="product.available">
          <h3>{{ product.name }}</h3>
          <p>Товар доступен</p>
          <p>Цена: {{ formattedPrice }}</p>
      </div>
      <div v-else>
          <h3>{{ product.name }}</h3>
          <p>Товар не доступен</p>
          <p>"Старая цена": {{product.price}}</p>
      </div>

  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data() {

      return {
          product:
          {
              id: 1,
              name: 'Techno 20',
              price: 99.99,
              available: true
          },

      };
  },
  computed: {
      formattedPrice() {
        return `$${this.product.price.toFixed(2)}`;
      },
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Roboto';
  src: url('@/assets/fonts/Roboto/Roboto-Italic-VariableFont_wdth,wght.ttf') format('ttf');
       /* url('@/assets/fonts/Roboto-Regular.woff') format('woff'); */
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Применение шрифта */
div {
  font-family: 'Roboto', sans-serif;
}

h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700; /* Если нужен жирный шрифт */
}
</style>