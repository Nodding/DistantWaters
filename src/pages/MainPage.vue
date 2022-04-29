<script setup lang="ts">
import TheGame from "../components/TheGame.vue";
import NavBar from "../components/navbar/NavBar.vue";
import Phaser from "phaser";
import Game from "phaser";
import "../index.css";
</script>

<template>
  <body class="m-0 p-0 container flex justify-between flex-col">
    <NavBar></NavBar>
    <header>
      <img
        alt="Our logo"
        class="logo"
        src="./assets/ship.svg"
        width="125"
        height="125"
      />
      <div class="wrapper">
        <TheGame msg="Look Johnny Boy" />
      </div>
    </header>

    <main>
      <p class="text-3xl text-blue-800 underline">This will be a footnote someday</p>
    </main>
  </body>
</template>

<style>
@import "../assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
