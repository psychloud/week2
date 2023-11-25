<script setup lang="ts">
import { useAuthstore } from '@/stores/auth'
import { useRouter } from 'vue-router';


const auth = useAuthstore()
const router = useRouter()

const onLogout = () => {
  auth.logout()

  router.push('/login')
}
const notLoggedInYet = () => {
    alert("You must login to see this content")
}

</script>

<template>
  <div class="flex flex-col container mx-auto p-4 gap-10">
    <!--Header-->
    <div class="flex justify-between">
      <!--Menu-->
      <div class="flex gap-4 ">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/restricted" v-if="auth.username">Restricted Page</router-link>
        <router-link to="/login" v-else @click="notLoggedInYet()">Restricted Page</router-link>
      </div>
      <!--auth user-->
      <div class="flex gap-2 items-center">
        <p v-if="auth.username">{{  auth.username }}</p>
        <div v-if="auth.username">
          <router-link class="bg-red-500 text-white py-1 px-1" to="/login" @click="onLogout()">Logout</router-link>
        </div>
        <div v-else>
          <button class="bg-blue-500 text-white py-1 px-1" to="/login">Login</button>
        </div>
      </div>
    </div>
    <!--Body-->
    <router-view> </router-view>
  </div>
</template>