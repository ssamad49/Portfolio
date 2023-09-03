<script setup>
import Home from './views/HomeView.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="mx-auto px-5 bg-blue-500">
     <header class="container  text-gray-400 bg-blue-500 body-font">
              <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                 <img src="./assets/image/logo.png" alt="logo">
                  <span class="ml-3 text-xl">ERROCHDI</span>
                </a>
                <nav
                  class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                  <router-link class="mr-5 hover:text-white text-white" to="/">Home</router-link>
                  <router-link class="mr-5 hover:text-white text-white" to="/about">About</router-link>
                  <router-link class="mr-5 hover:text-white text-white" to="/">Service</router-link>
                  <router-link class="mr-5 hover:text-white text-white" to="/about">Contact</router-link>
                  </nav>
                <button
                  class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </header>

  </div> 
    <router-view />

</template>

<style scoped>


</style> 
