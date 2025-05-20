import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/js/views/Home.vue';
import Login from '@/js/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
