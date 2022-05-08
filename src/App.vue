<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import MainPageVue from "./pages/MainPage.vue";
import AboutPageVue from "./pages/AboutPage.vue";
// import GamePageVue from "./pages/GamePage.vue";
import { PageView } from "./stores/mainStore";
import { shallowRef } from "vue";

//  Set up the map to change the value of the component element in the template
var pageMap = new Map<PageView, typeof MainPageVue>([
  [PageView.MainPage, MainPageVue],
  [PageView.AboutPage, AboutPageVue],
  // [PageView.GamePage, GamePageVue],
]);

var currentPage = shallowRef(pageMap.get(PageView.MainPage)); //  Our reactive element that changes with the state and triggers element change
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
      <v-tabs>
        <v-tab @click="changePage(PageView.MainPage)">Home Page</v-tab>
        <v-tab>Game Page</v-tab>
        <v-tab @click="changePage(PageView.AboutPage)">About page</v-tab>
      </v-tabs>
    </v-app-bar>
    <component :is="currentPage"> </component>
    <v-footer class="bg-blue-grey-darken-4 d-flex justify-space-between">
      <div class="text-right">Developed by Lucca and Johnny</div>
      <v-btn
        href="https://github.com/Nodding/DistantWaters"
        target="_blank"
        icon="mdi-github"
        size="large"
      />
    </v-footer>
  </v-app>
</template>
