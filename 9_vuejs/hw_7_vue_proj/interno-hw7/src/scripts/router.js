import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '@/components/Pages/PageHome.vue'
import PageProject from '@/components/Pages/PageProject.vue'
import PageBlog from '@/components/Pages/PageBlog.vue'
import BlogDetailsMain from '@/components/Pages/BlogDetailsMain.vue'
import ProjDetailsMain from '@/components/Pages/ProjDetailsMain.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: PageHome, name: 'home' },
  { path: '/project', component: PageProject, name: 'project' },
  { path: '/blog', component: PageBlog, name: 'blog' },
  {
    path: '/blog/:id', // Динамический сегмент для ID поста
    component: BlogDetailsMain, name: 'blogDetails', props: true 
  }, // Позволяет передавать параметры маршрута как props
  { path: '/project-details', component: ProjDetailsMain }
]

const router = new VueRouter({
  mode: 'history', // можно использовать 'hash' если нужно
  routes
})

export default router