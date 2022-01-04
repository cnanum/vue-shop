<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {CartItem, getAllCartItems, getProducts, getProducts2} from './services/products';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import {useStore} from 'vuex';

// const users2 = ref([
//   {"id": 1, "name": "홍길동", "age": 22},
//   {"id": 2, "name": "강감찬123", "age": 43},
//   {"name": "바붕이", "age": 99, "id": 3},
// ]);
//
// // fetch ~ promise
// let users3 = ref<any[]>([]);
// fetch('http://localhost:3000/users')
//     .then(response => response.json())
//     .then(json => users3.value = json);
//
// const promise = fetch('http://localhost:3000/users');
// promise
//     .then(function(response) {
//       return response.json()
//     })
//     .then(json => users3.value = json);
//
// // async ~ await
// let users = ref<any[]>([]);
//
// async function loadUsers() {
//   const response = await fetch('http://localhost:3000/users');
//   users.value = await response.json();
// }
//
// loadUsers();

const store = useStore();
const products = ref<any[]>([])
const carts = ref<CartItem[]>([])

async function loadProducts() {
  products.value = await getProducts()
}
// loadProducts()

async function loadCarts() {
  carts.value = await getAllCartItems();

  carts.value.forEach(({id}) => store.commit('toggleItem', id))
}

onMounted(() => {
  loadCarts();
})

</script>

<template>
  <Nav />

  <section class="bg-gray-100 p-8 m-8 rounded-lg">
    <router-view></router-view>
  </section>

  <About />
  <Footer />
</template>

<style>
</style>
