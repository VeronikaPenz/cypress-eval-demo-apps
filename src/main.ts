import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from "@/router";

const app = createApp(App);
app
  .use(router)
  .use(PrimeVue)
  .mount('#app')
