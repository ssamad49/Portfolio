<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './header.vue'
</script>

<template>
  <div class="mx-10">
     <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <br class="hidden lg:inline-block "><span class=" text-blue-500 font-bold text-base">Hey There I am</span>

        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ER-ROCHDI Abdessamad
        </h1>
        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="er-rochdi" src="../assets/image/hero-image.webp">
      </div>
    </div>
  </section>
  </div>

</template>

