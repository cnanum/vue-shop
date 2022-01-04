<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {addItemToCart, addProduct, addProduct4Axios} from '../services/products';
import type {Product, CartItem} from '../services/products';

  const title = ref<string>('Home')

  function changeTitle() {
    console.log('changeTitle!!!!')
    title.value = 'Hellowwwww~~ vue!'
    function abc() {
      console.log('aaaaaa')
    }
  }

  const abc = (e) => {
    console.log('abc')
  }

  onMounted(() => {
    const btn1 = document.getElementById('btn1')
    btn1?.addEventListener('click', abc)
  })

function addProductHandler() {
  const newProduct = {
    id: '9',
    name: 'abcd',
    price: 0,
  }

  addProduct(newProduct)
}
function addProductHandler2() {
  const newProduct: Product = {
    id: '10',
    name: 'mountain',
    price: 0,
    imgUrl: 'https://images.unsplash.com/photo-1560291771-fddd6537cadc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=290&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW58fHx8fHwxNjQxMjk2NDk5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=290',
  }

  addProduct4Axios(newProduct)
}
function addToCart() {
  const item: CartItem = {
    id: '10',
    qty: 5
  }

  addItemToCart(item)
}
</script>

<template>
  <h1>{{ title }}</h1>

  <button id="btn1">나는야 버튼~</button>
  <button @click="addProductHandler">상품 추가</button>
  <button @click="addProductHandler2">(axios)상품 추가</button>
  <button @click="addToCart">장바구니에 담기</button>
</template>

<style scoped>
button {@apply px-2 py-1 border bg-blue-100 rounded;}
</style>
