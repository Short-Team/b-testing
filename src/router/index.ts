import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SinglePost from '../views/SinglePost.vue'
import MainLayout from '../layout/MainLayout.vue'
import SinglePostLayout from '../layout/SinglePostLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: MainLayout,
      redirect: '/categories/:categoryId',
      children: [
        {
          path: '/categories/:categoryId',
          name: 'category',
          component: HomeView
        }
      ]
    },
    {
      path: '/single-post/:id',
      name: 'single-post',
      redirect: '/single-post/:id',
      component: SinglePostLayout,
      children: [
        {
          path: '/single-post/:id',
          name: 'single-post',
          component: SinglePost
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/categories/:categoryId',
    //   name: 'category',
    //   component: () => import('../views/HomeView.vue')
    // },
    // {
    //   path: '/single-post/:id',
    //   name: 'single-post',
    //   component: () => import('../views/SinglePost.vue')
    // },
    // {
    //   path: '/search-post',
    //   name: 'search-post',
    //   component: () => import('../views/SearchPost.vue')
    // }
  ]
})

export default router
