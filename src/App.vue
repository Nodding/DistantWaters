<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import MainPageVue from "./pages/MainPage.vue";
import AboutPageVue from "./pages/AboutPage.vue";
// import GamePageVue from "./pages/GamePage.vue";
import { PageView } from "./stores/mainStore";
import { ref } from "vue";

//  Set up the map to change the value of the component element in the template
var pageMap = new Map<PageView, typeof MainPageVue>([
  [PageView.MainPage, MainPageVue],
  [PageView.AboutPage, AboutPageVue],
  // [PageView.GamePage, GamePageVue],
]);

var currentPage = ref(pageMap.get(PageView.MainPage)); //  Our reactive element that changes with the state and triggers element change
//  Subscribe to the pina view state

function changePage(newPage: PageView) {
  console.log("Attempting to change page.");
  currentPage.value = pageMap.get(newPage); //thingy
  console.log("Current page is ", currentPage.value?.__file);
}
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon />
      <v-app-bar-title>Distant Waters</v-app-bar-title>
      <v-btn size="large" @click="changePage(PageView.MainPage)">
        Home Page
      </v-btn>
      <v-btn size="large"> Game </v-btn>
      <v-btn size="large" @click="changePage(PageView.AboutPage)">
        About
      </v-btn>
    </v-app-bar>
    <v-main>
      <component :is="currentPage"> </component>
    </v-main>
  </v-app>
</template>
