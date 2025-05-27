<template>
  <div>
    <app-header />

    <main>
      <section class="blogDetails__top__content"></section>
      <section class="blogDetails__mid__content center">
        <div class="blogDetails__mid__content__right">
          <h1 class="blogDetails__mid__content__right__header">
            Создадим макет лучшей перепланировки
          </h1>
          <img class="blogDetails__mid__content__right__img" src="@/assets/img/blogDetaisImg1.png" alt="photo" />
          <div class="blogDetails__mid__content__right__datelinks">
            <p class="blogDetails__mid__content__right__datelinks__date">
              26 Декабря, 2022
            </p>
            <ul class="blogDetails__mid__content__right__datelinks__links">
              <li><a href="#">Интерьер</a></li>
              <li><a href="#">Домой</a></li>
              <li><a href="#">Декор</a></li>
            </ul>
          </div>
          <component :is="changeTabs"></component>
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

    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/Universal/AppHeader.vue'
import AppFooter from '@/components/Universal/AppFooter.vue'
import ChangeKitchen from '@/components/BlogDetails/ChangeKitchen.vue'
import ChangeBedroom from '@/components/BlogDetails/ChangeBedroom.vue'
import ChangeBuilding from '@/components/BlogDetails/ChangeBuilding.vue'
import ChangeArchitecture from '@/components/BlogDetails/ChangeArchitecture.vue'
import ChangePlanning from '@/components/BlogDetails/ChangePlanning.vue'
import ChangeNone from '@/components/BlogDetails/ChangeNone.vue'

export default {
  name: 'BlogDetailsMain',
  components: {
    AppHeader,
    AppFooter,
    ChangeKitchen,
    ChangeBedroom,
    ChangeBuilding,
    ChangeArchitecture,
    ChangePlanning,
    ChangeNone
  },
  data () {
    return {
      nameButtons: [
        'Кухня',
        'Спальня',
        'Здание',
        'Архитектура',
        'Планировка',
        'Спальня'
      ],
      currentTab: 'none',
      tabMapping: {
        Кухня: 'Kitchen',
        Спальня: 'Bedroom',
        Здание: 'Building',
        Архитектура: 'Architecture',
        Планировка: 'Planning'
      }
    }
  },
  computed: {
    changeTabs () {
      const englishName = this.tabMapping[this.currentTab] || 'none'
      return `change-${englishName}`
    }
  }
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
