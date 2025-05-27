<template>
  <div id="app">
    <BlogDetailsMain />
  </div>
</template>

<script>
import BlogDetailsMain from './components/Pages/BlogDetailsMain.vue'
export default {
  name: 'App',
  components: {
    BlogDetailsMain
  }
}
</script>

<style>
/* Глобальные стили из styleDetails.css */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost&family=Lato:wght@300;400;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Jost", "DM Serif Display";
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
@import '@/assets/styles/styleIndexBlog.css';
/* Остальные глобальные стили из styleDetails.css */
</style>
