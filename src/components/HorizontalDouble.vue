<!--
   File: HorizontalDouble.vue
   Created Date: 05-13-2022
   Last Modified: Fri May 13 2022
   ---------------------
   Authors: John Cinquegrana, Lucca Cioffi
        Distant Waters
-->
<script setup lang="ts">
interface Props {
  sheetClass?: string;
  sheetStyle: string;
}

const props = defineProps<Props>();
</script>

<template>
  <v-sheet
    :class="props.sheetClass"
    class="d-flex flex-row justify-space-around"
    :style="props.sheetStyle"
  >
    <v-card-title>This is how you play the game</v-card-title>
    <v-card-subtitle>Oooh how exciting</v-card-subtitle>
    <v-card-text>Please style me better</v-card-text>
  </v-sheet>
</template>

<style></style>
