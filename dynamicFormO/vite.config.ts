import vue from "@vitejs/plugin-vue";
import viteSvgIcons from "vite-plugin-svg-icons";
import path from "path";
import vitePluginCompression from "vite-plugin-compression";
import ViteComponents from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
// @ts-ignore
export default defineConfig(({ mode }: any) => {
  const config = {
    base: "./",
    plugins: [
      vue(), vueJsxPlugin(),
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), "src/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      vitePluginCompression({
        threshold: 1024 * 10
      }),
      ViteComponents({
        resolvers: [NaiveUiResolver()]
      })
    ],
    resolve: {
      alias: [
        {
          find: "@/",
          replacement: path.resolve(process.cwd(), "src") + "/"
        }
      ]
    },
    server: {
      open: true,
      port: 3401,
      proxy: {
        "/transientManager": {
          target: "http://127.0.0.1:4398/manager",
          // target: "http://192.168.124.63:4598/manager",
          // target: "http://192.168.124.10:4598/manager",
          // target: "http://192.168.124.35:5101/manager",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/transientManager/, "")
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
        @import "@/style/definedIndex.less";`
        },
        scss: {
          additionalData: `@use "@/style/default/variables.scss" as *;`,
          silenceDeprecations: ["legacy-js-api"] // 解决sass报错警告
        }
      }
    }
  };
  if (mode === "staging") {
    return Object.assign(
      {
        base: "/transient/"
      },
      config
    );
  } else {
    return Object.assign(
      {
        base: "./",
        build: {
          outDir: "dist"
        }
      },
      config
    );
  }
});
