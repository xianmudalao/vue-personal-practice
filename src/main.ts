import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
// 裁剪引入
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper';

const app = createApp(App);

app.use(router).use(createPinia()).component('vue-cropper', VueCropper).mount('#app');
