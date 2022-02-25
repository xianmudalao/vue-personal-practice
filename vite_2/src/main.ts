import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Register icon sprite
import "virtual:svg-icons-register";
// # 创建根存储库并将其传递给应用程序
import { createPinia } from "pinia";

function bootstrap() {
  const app = createApp(App);
  app.use(router);
  app.use(createPinia());
  app.mount("#app");
}

bootstrap();
