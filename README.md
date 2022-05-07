# Distant Waters

Distant Waters is a wonderful turn based strategy game created by Lucca Cioffi ([https://github.com/Nodding/](Github)). In the game up to four players compete as greedy ships trying to collect as much gold as possible before the game ends.

## Developer Stuff

### First Download and Working with the project

**Muy Importante**
**Read This**

After cloning the repository, there are required steps before you add anything to the project. You must run `npm install` in the root folder before you do anything else. This command installs all the dependencies from the package.json file that are required for this project. The linter and code formatter will be very angry at you if you start adding files before you even have them installed.
Additionally this project will only really work in VSCode. The `.vscode` file contains extensions created by Vue specifically for production development with this Stack. JetBrains technically also supports most of this stack, but not all of it. I highly recommend installing at least the recommended extensions, you should be prompted to do so when you first open the project in VSCode. If you missed it then `Ctrl+shift+p` and type in *recommended* then select the command *Extensions: Show Recommended Extensions*.

### Production Chain

In order to open the project in a localhost first navigate to the main directory. First run `npm run lint` to enable ESLinting on any changes, and then run `npm run dev` to start the frontend. The lint command is technichally only required to run when you've made type changes, but it's not a detriment to run it every single time.

### Project Structure

#### How it Works

The website lands, as always, on `index.html`. Notice how this html page includes the `/src/main.ts` script tag. That script values *mounts* the ***App*** element to the DOM node with ID "app". The ***App*** refers to the file `src/App.vue` which is where the guts of the project really begins.
What you really need to know is that **App.vue** is basically our html body tag. Everything that is shown, or any real logic, happens as a result of App.vue and its imports. It is the landing point of a user that just logged in. That file is the beginning of the project.

#### File Structure/Organiztion

I am a fan of the Single File Component structure. The majority of the project will be written in the `src/components` folder where components are stored. Each file directly coresponds to a single kind of HTML element.

### Frameworks, Libraries, and Engines

#### Explaining Vue

Having a component library based framework is important due to the ease at which additional libraries can be imported and used. Vue and React are the two most popular ones. I believe Vue is significantly easier to understand than React, and even more Open Source. Vue is the main framework of the frontend of this project. In all technicality, this is a **Vite** app.  [https://vitejs.dev/](Vite) is the tool Vue recommends in order to introduce TypeScript into the environment.

#### Explaining Vuetify

[https://vuetifyjs.com/en/](Vuetify) is a material design framework for the Vue/Vite ecosystems. Acting as both a component library and CSS preprocessor Vuetify is what we chose to generate good looking templates the fastest.

#### Explaining Phaser

[https://www.npmjs.com/package/phaser](Phaser) is an HTML5 based 2D game engine with direct integration into Vue. Google told me it was the most popular one so it was the one that I used.
with direct integration into Vue. Google told me it was the most popular one so it was the one that I used.
#### Explaining Pinia

[https://pinia.vuejs.org/](Pinia) is a state management tool that is directly integrated with, and therefore heavily encouraged to use with, Vue. When the project is using Single File Component structure, it becomes very important to figure out how to access and update shared values across all of those components. Pinia solves that problem.

### Credits

Created under the [https://vuejs.org/](Vue.js) framework endhanced by the [https://www.typescriptlang.org/](Typescript) language. Creation of the project was done using the [https://github.com/vuejs/create-vue](Create Vue) CLI utility.

End to end testing is handled by [https://www.cypress.io/](Cypress). 

