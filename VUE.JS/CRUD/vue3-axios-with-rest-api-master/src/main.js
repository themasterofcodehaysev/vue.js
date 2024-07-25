import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js' 
import { createPinia } from 'pinia'
const pinia = createPinia()
// const app = createApp(App)


createApp(App).use(bootstrap).use(router).use(pinia).mount('#app')