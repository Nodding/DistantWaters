<!--
   File: ThreeColBlog.vue
   Created Date: 05-07-2022
   Last Modified: Fri May 13 2022
   ---------------------
   Authors: John Cinquegrana, Lucca Cioffi
        Distant Waters
-->
<script setup lang="ts">
interface Props {
  args: {
    image: string;
    description: string[];
    title: string;
    subtitle: string;
    links: {
      text: string;
      icon: string;
      url: string;
    }[];
  };
}

const props = defineProps<Props>();
</script>

<template>
  <v-row>
    <!-- left column -->
    <v-col cols="12" sm="2">
      <v-sheet color="white" rounded="lg" min-height="268">
        <v-container class="h-80">
          <v-img :src="props.args.image" class="rounded-lg h-75" />
        </v-container>
      </v-sheet>
    </v-col>

    <!-- Center column -->
    <v-col cols="12" sm="8">
      <v-card color="white" min-height="70vh">
        <v-card-title> {{ props.args.title }} </v-card-title>
        <v-card-subtitle> {{ props.args.subtitle }} </v-card-subtitle>
        <v-card-text>
          <div
            v-for="(text, index) in props.args.description"
            :key="index"
            v-html="text"
          ></div>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Right Column -->
    <v-col cols="12" sm="2">
      <v-sheet color="white" rounded="lg" min-height="268">
        <v-list>
          <v-list-item
            v-for="(link, i) in props.args.links"
            :key="i"
            :value="link"
            :href="link.url"
            target="_blank"
            active-color="none"
          >
            <v-list-item-avatar>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="link.text" />
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>
  </v-row>
</template>
