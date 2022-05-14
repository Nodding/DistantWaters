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
  image: "./src/assets/luca.jpg",
  description: [
    "I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs.",
    "I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs.",
    "I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs.",
    "I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs.",
    "I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs. I eat eggs.",
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
