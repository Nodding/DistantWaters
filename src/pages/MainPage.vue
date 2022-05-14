<!--
   File: MainPage.vue
   Created Date: 05-07-2022
   Last Modified: Fri May 13 2022
   ---------------------
   Authors: John Cinquegrana, Lucca Cioffi
        Distant Waters
-->
<script setup lang="ts">
import HorizontalDoubleVue from "@/components/HorizontalDouble.vue";
</script>

<template>
  <v-main class="d-flex flex-column align-stretch">
    <v-container class="d-flex flex-column justify-center align-center h-100">
      <div class="text-center text-h1 pa-5">Distant Waters</div>
      <div class="text-center text-h3 text-grey-darken-2 pa-5">
        A Game of Gold and Lighthouses
      </div>
    </v-container>
    <v-img src="./src/assets/layered-waves.svg" />
    <v-img src="./src/assets/reverse-waves.svg" />
    <div class="pa-0 ma-0 w-100" style="background-color: #5965bd">
      <horizontal-double-vue
        sheetStyle="background-color: #4d5280"
      ></horizontal-double-vue>
    </div>
  </v-main>
</template>

<style></style>
