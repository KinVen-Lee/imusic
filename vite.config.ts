/*
 * @Author: KinVen
 * @Date: 2021-04-13 18:45:16
 * @LastEditors: KinVen
 * @LastEditTime: 2021-05-11 16:54:12
 * @Description:
 * @Version: 1.0
 */
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import path from "path";
import type { UserConfig } from "vite";

const viteConfig: UserConfig = {
  plugins: [
    reactRefresh({
      parserPlugins: ["classProperties", "classPrivateProperties"],
    }),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
          libDirectory: "es",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "~": path.resolve(__dirname, "./"), // 根路径
      "@": path.resolve(__dirname, "src"), // src 路径
      "@netWork": path.resolve(__dirname, "src/netWork"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@common": path.resolve(__dirname, "src/common"),
    },
  },

  server: {
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
};
export default viteConfig;
