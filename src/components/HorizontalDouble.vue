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
    <!-- TODO Need to format this section to be able to add some blurbs on how to play. Right now it all goes on the same line.-->
    <v-card-title>This is how you play the game</v-card-title>
    <v-card-subtitle>Core Concept</v-card-subtitle>
    <v-card-text>
      In Distant Waters you and up to three other mates sail the high seas in
      search of treasure.
    </v-card-text>
  </v-sheet>
</template>

<style></style>
