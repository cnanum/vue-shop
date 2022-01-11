<script setup lang="ts">
import {onMounted, reactive, ref, watch, watchEffect} from 'vue';
import {register} from '../services/users';

const form = ref<HTMLFormElement>()
const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const password2 = ref<string>('')

type ErrorField = undefined | 'name' | 'email' | 'password'
const error = reactive<{
  invalid: boolean,
  field: ErrorField,
  message: string,
}>({
  invalid: false,
  field: undefined,
  message: ''
})

onMounted(() => {
  watchEffect(validate)
})

function validate() {
  if (name.value === '') {
    error.invalid = true
    error.field = 'name'
    error.message = 'Name is required'
    return false
  }
  if (email.value === '') {
    error.invalid = true
    error.field = 'email'
    error.message = 'Email is required'
    return false
  }
  if (password.value === '') {
    error.invalid = true
    error.field = 'password'
    error.message = 'Password is required'
    return false
  }
  if (password.value !== password2.value) {
    error.invalid = true
    error.field = 'password'
    error.message = 'Password must be the same'
    return false
  }

  error.invalid = false
  return true
}

function signup() {
  if (!validate()) return;

  // TODO 회원 등록!
  // register()
  console.log('register!!!!!!!!!!!!!!!')
}

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
      <h3 class="text-2xl font-bold text-center">Join us</h3>
      <form @submit.prevent="signup" ref="form">
        <div class="mt-4">
          <div>
            <label class="block">Name</label>
              <input type="text" placeholder="Name"
                     v-model="name"
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <span v-if="error.invalid && error.field === 'name'" class="text-xs text-red-400">
            {{error.message}}
          </span>
          <div class="mt-4">
            <label class="block">Email</label>
              <input type="text" placeholder="Email"
                     v-model="email"
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <span v-if="error.invalid && error.field === 'email'" class="text-xs text-red-400">
            {{error.message}}
          </span>
          <div class="mt-4">
            <label class="block">Password</label>
              <input type="password" placeholder="Password"
                     v-model="password"
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <span v-if="error.invalid && error.field === 'password'" class="text-xs text-red-400">
            {{error.message}}
          </span>
          <div class="mt-4">
            <label class="block">Confirm Password</label>
              <input type="password" placeholder="Password"
                     v-model="password2"
                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="flex">
            <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                    :disabled="error.invalid">
              Create Account
            </button>
          </div>
          <div class="mt-6 text-grey-dark">
            Already have an account?
            <a class="text-blue-600 hover:underline" href="#">
              Log in
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
