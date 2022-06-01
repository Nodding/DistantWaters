<!--
   File: MainPage.vue
   Created Date: 05-07-2022
   Last Modified: Fri May 13 2022
   ---------------------
   Authors: John Cinquegrana, Lucca Cioffi
        Distant Waters
-->
<script setup lang="ts">
import HorizontalSheet from "../components/HorizontalSheet.vue";
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
    <!-- Background div just to change the background color -->
    <div
      class="pa-0 ma-0 w-100 d-flex flex-row align-center justify-center"
      style="background-color: #5965bd"
    >
      <v-container
        class="h-auto w-auto mx-5 mb-5 pa-5 d-flex flex-row align-center justify-center"
        style="max-width: 60%"
      >
        <horizontal-sheet>
          <v-card>
            <v-card-title>Left Card</v-card-title>
            <v-card-text
              >Hey look at me I'm supposed to be different but I'm basically
              entirely the same.</v-card-text
            >
          </v-card>
          <v-card>
            <v-card-title>Title</v-card-title>
            <v-card-text
              >This is the text of the card that showcases how people are very
              good at playing the game.</v-card-text
            >
          </v-card>
        </horizontal-sheet>
      </v-container>
    </div>
  </v-main>
</template>

<style></style>
