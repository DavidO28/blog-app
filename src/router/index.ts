import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/blog-app/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create-blog',
      name: 'create-blog',
      component: () => import(/* webpackChunkName: "create blog" */ '../views/CreateBlog.vue'),
    },
    {
      path: '/update/:blogId',
      name: 'UpdateBlog',
      component: () => import(/* webpackChunkName: "update blog" */'../components/UpdateBlog.vue'),
      props: true,
    },
  ],
})
export default router
