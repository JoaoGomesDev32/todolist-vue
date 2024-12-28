import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#1976d2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
        },
      },
    },
  },
});

createApp(App).use(vuetify).mount("#app");
