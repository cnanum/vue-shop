<script setup lang="ts">

import {ref} from 'vue';
import {getProducts, getProducts2} from '../services/products';

const products = ref<any[]>([])

async function loadProducts() {
  products.value = await getProducts2()
}
loadProducts()
</script>

<template>
<h1 class="text-4xl m-8">제품 목록</h1>

  <h1>jdy-shop</h1>
  <ul>
    <li v-for="prd in products">
      <router-link :to="`/product?id=${prd.id}`">{{prd.id}}: {{prd.name}}</router-link>
      <div>가격: {{prd.price}}</div>
      <div><img :src="prd.imgUrl"></div>
    </li>
  </ul>
</template>

<style scoped>

</style>
