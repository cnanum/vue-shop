<script setup lang="ts">

import {useRoute, useRouter} from 'vue-router';
import {ref} from 'vue';
import {getProduct2} from '../services/products';

const route = useRoute()
const router = useRouter()
const id = route.query.id as string

const product = ref<any>({})
async function loadProduct() {
  product.value = await getProduct2(id)
}
loadProduct()

</script>

<template>
<h1>제품 상세</h1>
<div>
  <button class="bg-gray-200 px-4 py-2 rounded" @click="router.back">뒤로가기</button>
</div>
  <ul>
    <li>ID: {{product.id}}</li>
    <li>NAME: {{product.name}}</li>
    <li>price: {{product.price}}</li>
    <li><img :src="product.imgUrl"></li>
  </ul>


</template>

<style scoped>

</style>
