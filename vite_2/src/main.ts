import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Register icon sprite
import "virtual:svg-icons-register";
import "@/assets/style/index.scss";
// # 创建根存储库并将其传递给应用程序
import { createPinia } from "pinia";
// # 引入ui库
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 注册icon
import * as Icons from "@element-plus/icons-vue";

function bootstrap() {
  const app = createApp(App);
  app.use(router).use(createPinia()).use(ElementPlus);
  // 注册组件
  Object.keys(Icons).forEach((key) => {
    console.log(key);
    app.component(key, Icons[key as keyof typeof Icons]);
  });
  app.mount("#app");
}

bootstrap();
