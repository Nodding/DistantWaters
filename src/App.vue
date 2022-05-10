<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import GamePageVue from "./pages/GamePage.vue";
import { router } from "./routes/Router";
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon />
      <v-app-bar-title>Distant Waters</v-app-bar-title>
      <v-tabs>
        <v-tab @click="router.push('/')">Home Page</v-tab>
        <v-tab @click="router.push('/game')">Game Page</v-tab>
        <v-tab @click="router.push('/about')">About page</v-tab>
      </v-tabs>
    </v-app-bar>
    <router-view />
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
