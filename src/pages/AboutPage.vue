<!--
   File: AboutPage.vue
   Created Date: 05-07-2022
   Last Modified: Fri May 13 2022
   ---------------------
   Authors: John Cinquegrana, Lucca Cioffi
        Distant Waters
-->

<script setup lang="ts">
import ThreeColBlog from "../components/ThreeColBlog.vue";

const JohnData = {
  image: "./src/assets/JohnC.jpg",
  description: [
    "Hi there! I love websites and makin em. My interest in technology started young when I was just around ten years old. As all kids my age, I grew up playing video games. Like all tech kids my age, I grew up wanting to try to make video games. Eventually, in attempting to make a game, I came to love computer programming. As that love matured I found myself graduating towards the fields of Web Development and Machine Learning. I graduated College in 2021 out of Stevens Isntitute of Technology as a Computer Science Major who specialized in the fields of Web Dev and ML. I currently am working as a Full Stack Developer for the company 911Inform.",
    "I met Lucca in High School in technology class. With him I had attempted to make my first video game. Even though the game didn't turn out great, I never did stop being friends with Lucca. No, there is not anywhere you can play that game, I made sure it was wiped from existence.",
    "Nowadays I spend my time outside of working playing games with friends and being badgered to make websites for their stupid ideas.",
  ],
  title: "Lead Site Programmer",
  subtitle: "Web Developer Extraordinaire",
  links: [
    {
      text: "LinkedIn",
      icon: "mdi-linkedin",
      url: "https://www.linkedin.com/in/jcinquegrana/",
    },
    {
      text: "GitHub",
      icon: "mdi-github",
      url: "https://github.com/jcinqueg",
    },
  ],
};

const LuccaData = {
  image: "./src/assets/Lucca_better.jpg",
  description: [
    "Hi my name is Lucca, and I am passionate about game design. This game was originally thought up by myself as a board game, and after playing it with my good friend Johnny, he told me later he'd love to make the game playable on a website.",
    "We are both working hard to create a great site to play a hopefully great game!",
    "",
    "Here are some of my favorite games so you can ponder how in the world this ended up being a pirate game: ",
    "Team Fortress 2, Quake (and it's many many community maps), Civilization V, Prey 2017, Bloons Tower Defense (3-6)",
    "",
    "I hope you enjoy the game, as we both work hard to not only teach ourselves website development but web game design as well.",
    "I eat eggs",
  ],
  title: "Lead Game Designer",
  subtitle: "The Man With The Plan",
  links: [
    {
      text: "LinkedIn",
      icon: "mdi-linkedin",
      url: "https://www.linkedin.com/in/lucca-cioffi-3aa8b1192/",
    },
    {
      text: "GitHub",
      icon: "mdi-github",
      url: "https://github.com/Nodding",
    },
  ],
};
</script>
<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <three-col-blog :args="JohnData"></three-col-blog>
      <three-col-blog :args="LuccaData"></three-col-blog>
    </v-container>
  </v-main>
</template>
