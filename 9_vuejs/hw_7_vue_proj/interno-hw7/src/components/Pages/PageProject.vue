<template>
    <div>
        <main id="app">
            <section class="project__top__content">
                <div class="project__top__content__box">
                    <h1 class="project__top__content__box__header">Наш проект</h1>
                    <p class="project__top__content__box__text">Домой / Проект</p>
                </div>
            </section>
            <section class="project__mid__content center">
                <div class="project__mid__content__buttons">
                    <button class="project__mid__content__button" @click="currentTab = nameButton.value"
                        v-for="nameButton in nameButtons" :key="nameButton.id">{{ nameButton.label }}</button>
                </div>
                <component :is="changeTabs"></component>
            </section>
            <nav>
                <ul class="pagination">
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
                                fill="none">
                                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            </svg><span class="pagination__number">01</span></a></li>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
                                fill="none">
                                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            </svg><span class="pagination__number">02</span></a></li>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
                                fill="none">
                                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            </svg><span class="pagination__number">03</span></a></li>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
                                fill="none">
                                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                                <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg></a></li>
                </ul>
            </nav>
        </main>
    </div>
  </template>
  
  <script>
  import ChangeKitchen from '@/components/ProjComponents/ChangeKitchen.vue';
  import ChangeBathroom from '@/components/ProjComponents/ChangeBathroom.vue';
  import ChangeBedroom from '@/components/ProjComponents/ChangeBedroom.vue';
  import ChangeLivingArea from '@/components/ProjComponents/ChangeLivingArea.vue';
  export default {
    name: 'ProjectComp',
    components: {
        ChangeKitchen,
        ChangeBathroom,
        ChangeBedroom,
        ChangeLivingArea
    },
  
    data() {
        return {
            nameButtons: [
                { value: 'Bathroom', label: 'Ванная' },
                { value: 'Bedroom', label: 'Спальня' },
                { value: 'Kitchen', label: 'Кухня' },
                { value: 'LivingArea', label: 'Гостиная' }
            ],
            currentTab: 'Bedroom'
        };
    },
  
    computed: {
        changeTabs() {
            return `Change${this.currentTab}`
        }
    }
  };
  </script>
  
<!-- <style scoped> -->
/* @import '@/assets/styles/styleProject.css'; */
<!-- </style> -->

<style lang="scss" scoped>
@import "@/assets/styles/styleProject_scss.scss";
</style>
 