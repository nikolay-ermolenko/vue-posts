import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/Home.vue';

Vue.use(VueRouter);

const Home = 'Home';
const About = 'About';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: Home,
    component: HomeView,
  },
  {
    path: '/about',
    name: About,
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

export {
  Home,
  About,
};
