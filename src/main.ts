import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
// 字体--------
import '@/assets/svg/iconfont';
import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';
// 裁剪引入
import 'vue-cropper/dist/index.css';
import { VueCropper } from 'vue-cropper';
// 基础组件-------
import BaseSvg from '@/components/svg/BaseSvg.vue';

const app = createApp(App);

app
  .use(router)
  .use(createPinia())
  .component('vue-cropper', VueCropper)
  .component('base-svg', BaseSvg)
  .mount('#app');
