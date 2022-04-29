import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  defineCustomElements as defineIonPhaser /* @vite-ignore */,
} from "@ion-phaser/core/loader";
import App from "./App.vue";
import "./index.css";

// Creates app from src/App.vue
const app = createApp(App);

// Applies Pinia for use with state management
app.use(createPinia());

// Define the interface for phaser to start
defineIonPhaser(window);

// Binds the main Vue app into the HTML element #app
app.mount("#app");
