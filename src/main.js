import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router/router';
import '@/assets/sass/main.scss';

import Toast from 'vue-toastification';
import toastOptions from '@/composables/toast';
import "vue-toastification/dist/index.css";

const store = createPinia();
const app = createApp(App);

app
.use(router)
.use(store)
.use(Toast, toastOptions)
.mount('#app')
