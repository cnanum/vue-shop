<script setup lang="ts">
import {ref} from 'vue';

// fetch ~ promise

// let users3 = ref<any[]>([]);


// fetch('http://localhost:3000/product')
//     .then(response => response.json())
//     .then(json => users3.value = json);


// const promise = fetch('http://localhost:3000/product');
// promise
//     .then(function(response) {
//       return response.json()
//     })
//     .then(json => users3.value = json);

// async ~ await
let users = ref<any[]>([]);

async function loadUsers() {
  const response = await fetch('http://localhost:3000/product');
  users.value = await response.json();
}

loadUsers();
</script>

<template>

  <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" v-for="user in users" :key="user.id">
      <a href="#">
          <img class="hover:grow hover:shadow-lg" v-bind:src="user.img_url">
          <div class="pt-3 flex items-center justify-between">
              <p class="">{{user.name}}</p>
              <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
              </svg>
          </div>
          <p class="pt-1 text-gray-900">{{user.price}}원</p>
      </a>
    </div>
  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
