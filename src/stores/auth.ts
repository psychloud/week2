import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useAuthstore = defineStore('auth', () => {
const username = ref('')

const login = (name: string) => {
    username.value = name
}

const logout = () => {
    username.value = ''
}
    return { username, login, logout }
  })