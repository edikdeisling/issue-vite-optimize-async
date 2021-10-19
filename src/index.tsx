import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router';
import App from './App.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: RouterView,
  },
  {
    path: '/route1',
    component: () => import('./routes/Route1.vue'),
  },
  {
    path: '/route2',
    component: () => import('./routes/Route2.vue'),
  },
  {
    path: '/route3',
    component: () => import('./routes/Route3.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount('#app');
