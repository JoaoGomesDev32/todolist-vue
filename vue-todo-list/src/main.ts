import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Assuming you have a vuetify plugin file
import { loadFonts } from './plugins/webfontloader'; // Assuming you have a webfontloader plugin file

loadFonts();

createApp(App)
  .use(vuetify)
  .mount('#app');