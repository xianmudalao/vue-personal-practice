import { UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import ViteSvgIconsPlugin from "vite-plugin-svg-icons";
import viteCompression from "vite-plugin-compression";

//
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: "element-plus",
            esModule: true,
            resolveStyle: (name: string) => {
              name = name.substring(3, name.length);
              return `element-plus/es/components/${name}/style/index`;
            },
          },
        ], // 自定义规则
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ["vue", "vue-router"],
        dts: "src/auto-import.d.ts", // 配置文件生成位置
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dirs: ["src/components"],
        extensions: ["vue"],
        dts: "src/components.d.ts", // 配置文件生成位置
      }),
      // gzip压缩 生产环境生成 .gz 文件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      }),
      // svg配置
      ViteSvgIconsPlugin({
        // 指定要缓存的图表文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 执行icon name的格式
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/assets/style/main.scss';`,
        },
      },
      modules: {},
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      open: true,
      https: false,
      proxy: {},
    },
    // build: {
    //   target: "es2015",
    //   cssTarget: "chrome86",
    //   outDir: "dist",
    //   terserOptions: {
    //     compress: {
    //       keep_infinity: true,
    //       drop_console: true,
    //       drop_debugger: true,
    //     },
    //   },
    // },
  };
};
