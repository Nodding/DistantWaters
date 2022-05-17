<!--
   File: TheGame.vue
   Created Date: 04-28-2022
   Last Modified: Fri May 13 2022
   ---------------------
   Authors: John Cinquegrana, Lucca Cioffi
        Distant Waters
-->
<script setup lang="ts">
import { onMounted } from "vue";
import { createGame } from "../scripts/createGame";

interface propsType {
  msg: string;
}

const props = defineProps<propsType>();

onMounted(() => {
  createGame(props.msg);
});
</script>

<template>
  <div class="text-h2">
    Welcome to the <i><b>game</b></i>
  </div>
  <div id="gameHolder"></div>
</template>

<style></style>
