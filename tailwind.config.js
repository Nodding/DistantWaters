/* eslint-disable */

const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    // etc.
  ],
};
