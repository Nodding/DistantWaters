/*
 * File: themes.ts
 * Created Date: 05-13-2022
 * Last Modified: Fri May 13 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */

import { createVuetify } from "vuetify";

const underOceanTheme = {
  dark: true,
  colors: {
    background: "#383e6d",
    surface: "#5965bd",
  },
};

export default createVuetify({
  theme: {
    themes: {
      underOceanTheme,
    },
  },
});
