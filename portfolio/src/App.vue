<script setup>
import Home from './views/HomeView.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="mx-auto px-5">
     <header class="container  text-gray-400  body-font">
              <div class="container mx-auto flex flex-wrap p-5  md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                 <img src="./assets/image/logo.png" alt="logo">
                  <span class="ml-3 text-xl hover:text-blue-500">ERROCHDI</span>
                </a>
                <nav
                  class=" md:mr-auto hidden md:block md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                  <router-link class="mr-5 hover:text-blue-500 text-black" to="/">Home</router-link>
                  <router-link class="mr-5 hover:text-blue-500 text-black" to="/about">About</router-link>
                  <router-link class="mr-5 hover:text-blue-500 text-black" to="/">Service</router-link>
                  <router-link class="mr-5 hover:text-blue-500 text-black" to="/about">Contact</router-link>
                </nav>
                <button
                  class="inline-flex items-center text-white border-0 py-2  px-6 focus:outline-none hover:bg-gray-700  text-base mt-4 md:mt-0 rounded-full font-bold bg-blue-500">Downlaod CV
                 
                </button>
                <div class=" flex items-center">
                      <button @click="toggleMobileMenu" class="text-white bg-blue-500">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                          </svg>
                      </button>
                </div>
              </div>
            </header>

  </div> 
    <router-view />

</template>

<style scoped>


</style> 
