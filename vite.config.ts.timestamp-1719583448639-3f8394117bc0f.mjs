// vite.config.ts
import { defineConfig } from "file:///D:/projects/react/atom-theme-switch/node_modules/vite/dist/node/index.js";
import react from "file:///D:/projects/react/atom-theme-switch/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import tsconfigPaths from "file:///D:/projects/react/atom-theme-switch/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///D:/projects/react/atom-theme-switch/node_modules/vite-plugin-dts/dist/index.mjs";
import svgr from "file:///D:/projects/react/atom-theme-switch/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "D:\\projects\\react\\atom-theme-switch";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true }), svgr(
    {
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default"
      }
    }
  )],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./src/lib/main.ts"),
      name: "AtomThemeSwitch",
      fileName: "AtomThemeSwitch"
    },
    rollupOptions: {
      // bundler options
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./lib/test/setup.ts",
      css: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxyZWFjdFxcXFxhdG9tLXRoZW1lLXN3aXRjaFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxccmVhY3RcXFxcYXRvbS10aGVtZS1zd2l0Y2hcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL3JlYWN0L2F0b20tdGhlbWUtc3dpdGNoL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIlxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHRzY29uZmlnUGF0aHMoKSwgZHRzKHsgcm9sbHVwVHlwZXM6IHRydWUgfSksIHN2Z3IoXG4gICAge1xuICAgICAgaW5jbHVkZTogJyoqLyouc3ZnJyxcbiAgICAgIHN2Z3JPcHRpb25zOiB7XG4gICAgICAgIGV4cG9ydFR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIH0sXG4gICAgfVxuICApXSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBsaWJyYXJ5IGVudHJ5IGFuZCBvdXRwdXQgc2V0dGluZ3NcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2xpYi9tYWluLnRzJyksXG4gICAgICBuYW1lOiAnQXRvbVRoZW1lU3dpdGNoJyxcbiAgICAgIGZpbGVOYW1lOiAnQXRvbVRoZW1lU3dpdGNoJyxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHsgICAgIC8vIGJ1bmRsZXIgb3B0aW9uc1xuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0L2pzeC1ydW50aW1lJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgICAgICdyZWFjdC9qc3gtcnVudGltZSc6ICdyZWFjdC9qc3gtcnVudGltZScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRlc3Q6IHtcbiAgICAgIGdsb2JhbHM6IHRydWUsXG4gICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICAgIHNldHVwRmlsZXM6IFwiLi9saWIvdGVzdC9zZXR1cC50c1wiLFxuICAgICAgY3NzOiB0cnVlXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQU5qQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGNBQWMsR0FBRyxJQUFJLEVBQUUsYUFBYSxLQUFLLENBQUMsR0FBRztBQUFBLElBQzlEO0FBQUEsTUFDRSxTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsUUFDWCxZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFBQSxFQUNELE9BQU87QUFBQTtBQUFBLElBRUwsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLE1BQzdDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLGFBQWEsbUJBQW1CO0FBQUEsTUFDcEQsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
