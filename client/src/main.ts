import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Product from './views/Product.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product', component: Product },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
