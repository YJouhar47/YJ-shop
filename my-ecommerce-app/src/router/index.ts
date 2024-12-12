import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CartView from '../views/CartView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView,
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetailView
    }
  ]
});

export default router;
