<script setup lang="ts">
import {ref} from 'vue';
import {getProducts, getProducts2} from './services/products';

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

const products = ref<any[]>([])

async function loadProducts() {
  products.value = await getProducts()
}
loadProducts()

</script>

<template>
  <div class="bg-gray-200 p-8 m-8 rounded-lg flex gap-8">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/products">Go to Products</router-link>
  </div>

  <section class="bg-gray-100 p-8 m-8 rounded-lg">
    <router-view></router-view>
  </section>

</template>

<style>
</style>
