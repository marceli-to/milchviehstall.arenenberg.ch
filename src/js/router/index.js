import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Home from '@/js/views/Home.vue';
import Login from '@/js/views/Login.vue';
import Parcours from '@/js/views/Parcours.vue';

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
  {
    path: '/parcours',
    name: 'parcours',
    component: Parcours
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
});

export default router;
