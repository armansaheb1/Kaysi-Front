// vite.config.mjs
import { defineConfig, loadEnv } from "file:///home/ars/Desktop/Kaysi-Front/node_modules/vite/dist/node/index.js";
import vue from "file:///home/ars/Desktop/Kaysi-Front/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "node:path";
import autoprefixer from "file:///home/ars/Desktop/Kaysi-Front/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_dirname = "/home/ars/Desktop/Kaysi-Front";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env = { ...process.env, ...env };
  return {
    plugins: [vue()],
    base: "/",
    css: {
      postcss: {
        plugins: [
          autoprefixer({})
          // add options if needed
        ]
      }
    },
    resolve: {
      alias: [
        // webpack path resolve to vitejs
        {
          find: /^~(.*)$/,
          replacement: "$1"
        },
        {
          find: "@/",
          replacement: `${path.resolve(__vite_injected_original_dirname, "src")}/`
        },
        {
          find: "@",
          replacement: path.resolve(__vite_injected_original_dirname, "/src")
        }
      ],
      extensions: [
        ".mjs",
        ".js",
        ".ts",
        ".jsx",
        ".tsx",
        ".json",
        ".vue",
        ".scss"
      ]
    },
    server: {
      port: 3e3,
      proxy: {
        // https://vitejs.dev/config/server-options.html
      }
    },
    define: {
      // vitejs does not support process.env so we have to redefine it
      "process.env": process.env
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYXJzL0Rlc2t0b3AvS2F5c2ktRnJvbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Fycy9EZXNrdG9wL0theXNpLUZyb250L3ZpdGUuY29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9hcnMvRGVza3RvcC9LYXlzaS1Gcm9udC92aXRlLmNvbmZpZy5tanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICAvLyBMb2FkIC5lbnZcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJylcbiAgcHJvY2Vzcy5lbnYgPSB7IC4uLnByb2Nlc3MuZW52LCAuLi5lbnYgfVxuXG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW3Z1ZSgpXSxcbiAgICBiYXNlOiAnLycsXG4gICAgY3NzOiB7XG4gICAgICBwb3N0Y3NzOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBhdXRvcHJlZml4ZXIoe30pIC8vIGFkZCBvcHRpb25zIGlmIG5lZWRlZFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAgLy8gd2VicGFjayBwYXRoIHJlc29sdmUgdG8gdml0ZWpzXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXn4oLiopJC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6ICckMScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAnQC8nLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAnQCcsXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcvc3JjJyksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZXh0ZW5zaW9uczogW1xuICAgICAgICAnLm1qcycsXG4gICAgICAgICcuanMnLFxuICAgICAgICAnLnRzJyxcbiAgICAgICAgJy5qc3gnLFxuICAgICAgICAnLnRzeCcsXG4gICAgICAgICcuanNvbicsXG4gICAgICAgICcudnVlJyxcbiAgICAgICAgJy5zY3NzJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICBwcm94eToge1xuICAgICAgICAvLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL3NlcnZlci1vcHRpb25zLmh0bWxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZpbmU6IHtcbiAgICAgIC8vIHZpdGVqcyBkb2VzIG5vdCBzdXBwb3J0IHByb2Nlc3MuZW52IHNvIHdlIGhhdmUgdG8gcmVkZWZpbmUgaXRcbiAgICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52LFxuICAgIH0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJRLFNBQVMsY0FBYyxlQUFlO0FBQ2pULE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxrQkFBa0I7QUFIekIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFFeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFVBQVEsTUFBTSxFQUFFLEdBQUcsUUFBUSxLQUFLLEdBQUcsSUFBSTtBQUV2QyxTQUFPO0FBQUEsSUFDTCxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsSUFDZixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUCxhQUFhLENBQUMsQ0FBQztBQUFBO0FBQUEsUUFDakI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBO0FBQUEsUUFFTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUssQ0FBQztBQUFBLFFBQ2hEO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsTUFBTTtBQUFBLFFBQzdDO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQTtBQUFBLE1BRVA7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQSxNQUVOLGVBQWUsUUFBUTtBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
