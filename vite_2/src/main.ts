import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Register icon sprite
import "virtual:svg-icons-register";
import "@/assets/style/index.scss";
// # 创建根存储库并将其传递给应用程序
import { createPinia } from "pinia";
// # 引入ui库

// 注册icon
import * as Icons from "@element-plus/icons-vue";

function bootstrap() {
  const app = createApp(App);
  app.use(router).use(createPinia());
  // 注册组件
  Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons]);
  });
  app.mount("#app");
}

bootstrap();
