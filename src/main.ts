// import "./plugins/bootstrap-vue";
import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
// install bootstrap first
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Import the boostrap vue library
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

createApp(App)
  .use(router)
  .use(BootstrapVue)
  // .use(BootstrapVueIcons)
  .mount("#app");
