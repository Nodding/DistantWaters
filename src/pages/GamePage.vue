<!--
   File: GamePage.vue
   Created Date: 05-07-2022
   Last Modified: Fri May 13 2022
   ---------------------
   Authors: John Cinquegrana, Lucca Cioffi
        Distant Waters
-->
<script setup lang="ts">
import TheGame from "../components/TheGame.vue";
</script>

<template>
  <v-main>
    <v-card>
      <v-card-title>This is a card title</v-card-title>
    </v-card>
    <TheGame msg="Hi Lucca"></TheGame>
  </v-main>
</template>
