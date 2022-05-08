<script setup lang="ts">
const JohnData = {
  links: [
    {
      text: "LinkedIn",
      icon: "mdi-linkedin",
      url: "https://www.linkedin.com/in/jcinquegrana/",
    },
    { text: "GitHub", icon: "mdi-github", url: "https://github.com/jcinqueg" },
  ],
};
</script>
<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <!-- left column -->
        <v-col cols="12" sm="2">
          <v-sheet color="white" rounded="lg" min-height="268">
            <v-container class="h-80"
              ><v-img
                src="./src/assets/JohnC.jpg"
                class="rounded-lg h-75"
              ></v-img
            ></v-container>
          </v-sheet>
        </v-col>

        <!-- Center column -->
        <v-col cols="12" sm="8">
          <v-card color="white" min-height="70vh">
            <v-card-title> John Cinquegrana </v-card-title>
            <v-card-subtitle> Web Developer Extraordinaire </v-card-subtitle>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
              scelerisque in dictum non consectetur a erat. Nisl rhoncus mattis
              rhoncus urna neque viverra. Aenean vel elit scelerisque mauris.
              Odio ut enim blandit volutpat. Diam ut venenatis tellus in metus
              vulputate eu. Volutpat consequat mauris nunc congue nisi vitae. In
              hac habitasse platea dictumst vestibulum rhoncus. Maecenas
              pharetra convallis posuere morbi leo urna. Nascetur ridiculus mus
              mauris vitae ultricies leo integer. Cursus vitae congue mauris
              rhoncus aenean. Lobortis elementum nibh tellus molestie nunc non.
              Porta non pulvinar neque laoreet suspendisse interdum consectetur
              libero id. Facilisi morbi tempus iaculis urna id volutpat lacus
              laoreet non. At ultrices mi tempus imperdiet nulla malesuada
              pellentesque elit. Facilisi cras fermentum odio eu feugiat pretium
              nibh ipsum. Proin sagittis nisl rhoncus mattis rhoncus urna neque.
              Elementum pulvinar etiam non quam lacus suspendisse faucibus. Sit
              amet nisl suscipit adipiscing bibendum. Libero id faucibus nisl
              tincidunt eget nullam non nisi. At risus viverra adipiscing at in
              tellus integer feugiat. Est lorem ipsum dolor sit amet. Tellus at
              urna condimentum mattis. Ut lectus arcu bibendum at varius vel
              pharetra vel turpis. Massa eget egestas purus viverra accumsan.
              Venenatis cras sed felis eget velit. Elit eget gravida cum sociis.
              Sed ullamcorper morbi tincidunt ornare massa. Morbi tincidunt
              ornare massa eget. Vel fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Mauris augue neque gravida in
              fermentum et. Morbi quis commodo odio aenean sed adipiscing diam
              donec adipiscing. Mattis pellentesque id nibh tortor id aliquet
              lectus proin nibh. Ultrices tincidunt arcu non sodales neque
              sodales ut etiam. Purus gravida quis blandit turpis. At erat
              pellentesque adipiscing commodo elit at. Lobortis elementum nibh
              tellus molestie nunc non. Donec et odio pellentesque diam. Enim
              blandit volutpat maecenas volutpat blandit aliquam etiam erat
              velit. Ultrices sagittis orci a scelerisque purus semper eget
              duis. Senectus et netus et malesuada fames ac.
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Right Column -->
        <v-col cols="12" sm="2">
          <v-sheet color="white" rounded="lg" min-height="268">
            <v-list>
              <v-list-item
                v-for="(link, i) in JohnData.links"
                :key="i"
                :value="link"
                :href="link.url"
                target="_blank"
                active-color=""
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
    </v-container>
  </v-main>
</template>
