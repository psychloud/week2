<script setup lang="ts">
import { useAuthstore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router';


const auth = useAuthstore()
const username = ref('')
const router = useRouter()

const onLogin = () => {
    auth.login(username.value)

    router.push('/home')
}
</script>
<template>
    <div>
        <h1>Login Page</h1>
        <div class="flex flex-col gap-2">
            <input type="text" v-model="username" class="border p-2" >
            <button @click="onLogin()" class="bg-blue-500 text-white py-1 px-3">Login</button>
        </div>
    </div>
</template>