import Vue from 'vue';
import VueRouter from 'vue-router';
import Profil from '@/views/Profil.vue';
import Scenarios from '@/views/Scenarios.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
  },
  {
    path: '/scenarios',
    name: 'Scenarios',
    component: Scenarios,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
