<template>
   <div>
    <main>
      <section class="blogDetails__top__content"></section>
      <section class="blogDetails__mid__content center">
        <div class="blogDetails__mid__content__right">
          <h1 class="blogDetails__mid__content__right__header">
            {{ currentPost.header }}
          </h1>
          <img class="blogDetails__mid__content__right__img" :src="currentPost.img" alt="photo" />
          <div class="blogDetails__mid__content__right__datelinks">
            <p class="blogDetails__mid__content__right__datelinks__date">
              {{ currentPost.date }}
            </p>
            <ul class="blogDetails__mid__content__right__datelinks__links">
              <li v-for="(tag, index) in currentPost.tags" :key="index">
                <a href="#">{{ tag }}</a>
              </li>
            </ul>
          </div>
          <component :is="currentComponent" :postData="currentPost"></component>
        </div>

        <div class="blogDetails__mid__content__left">
          <h3 class="blogDetails__mid__content__left__header">Тэги</h3>
          <div class="blogDetails__mid__content__left__buttons">
            <button
              class="blogDetails__mid__content__left__button"
              @click="currentTab = nameButton"
              v-for="nameButton in nameButtons"
              :key="nameButton"
            >
              {{ nameButton }}
            </button>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import { posts } from '@/data/dataBlog/dataBlogPosts.js' // Или импортируйте данные из хранилища
import ChangeKitchen from '@/components/BlogDetails/ChangeKitchen.vue'
import ChangeBedroom from '@/components/BlogDetails/ChangeBedroom.vue'
import ChangeBuilding from '@/components/BlogDetails/ChangeBuilding.vue'
import ChangeArchitecture from '@/components/BlogDetails/ChangeArchitecture.vue'
import ChangePlanning from '@/components/BlogDetails/ChangePlanning.vue'
import ChangeNone from '@/components/BlogDetails/ChangeNone.vue'

export default {
  name: 'BlogDetailsMain',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  components: {
    ChangeKitchen,
    ChangeBedroom,
    ChangeBuilding,
    ChangeArchitecture,
    ChangePlanning,
    ChangeNone
  },
  data() {
    return {
      allPosts: posts,
      nameButtons: ['Кухня', 'Спальня', 'Здание', 'Архитектура', 'Планировка'],
      currentTab: 'none'
    }
  },
  computed: {
    currentPost() {
      const post = this.allPosts.find(post => post.id === Number(this.id)) || {}
      return {
        ...post,
        tags: post.tags || ['Общее'] // Добавляем дефолтные теги, если их нет
      }
    },
    currentComponent() {
      const componentMap = {
        'Кухня': 'ChangeKitchen',
        'Спальня': 'ChangeBedroom',
        'Здание': 'ChangeBuilding',
        'Архитектура': 'ChangeArchitecture',
        'Планировка': 'ChangePlanning'
      }
      return componentMap[this.currentTab] || 'ChangeNone'
    }
  },
//   created() {
//   if (!this.currentPost.id) {
//     // Если пост не найден, можно перенаправить на 404 или список постов
//     this.$router.push('/blog')
//   }
// }
}
</script>

<style scoped>
/* Стили из details.html */
.blogDetails__top__content {
  background: url("@/assets/img/blogDetais_background.jpg"), lightgray 50%/cover no-repeat;
  height: 351px;
  margin-bottom: 100px;
}
/* Остальные стили компонента */
</style>
<style>
@import '@/assets/styles/styleDetails.css';
</style>
