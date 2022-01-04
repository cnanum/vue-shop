import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Product from './views/Product.vue'
import { createStore } from 'vuex'

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


// Create a new store instance.
const store = createStore<{cart: string[]}>({
  state () {
    return {
      cart: [],
    }
  },
  mutations: {
    toggleItem (state, id) {
      const index = state.cart.indexOf(id);
      // 이미 카트에 있다! 빼자!
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      // 카트에 없다! 넣자!
      else {
        state.cart.push(id);
      }
    },
  }
})

createApp(App).use(router).use(store).mount('#app')
