import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('@/pages/Movies.vue'),
  },
  {
    path: '/movies/:id',
    name: 'movieIdPage',
    component: () => import('@/pages/MovieIdPage.vue')
  }
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router