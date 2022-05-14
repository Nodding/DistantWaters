/*
 * File: main.ts
 * Created Date: 04-27-2022
 * Last Modified: Fri May 13 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */
// import { appendChild } from "parse5/lib/tree-adapters/default";
import "vuetify/styles";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { router } from "./routes/Router";

//  Create the app we are going to use

const app = createApp(App);

//  Designate the app to use our router
app.use(router);

//  Load fonts for Vuetify
loadFonts();

//  Load in Pinia
app.use(createPinia());

//  Allow the app to use everything vuetify
app.use(vuetify);

//  Attach the Vue app to the html page
console.log("Attaching Vue app to the HTML files.");
app.mount("#app");
