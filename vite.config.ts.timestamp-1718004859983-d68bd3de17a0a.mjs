// vite.config.ts
import { defineConfig } from "file:///D:/projects/react/atom-theme-switch/node_modules/vite/dist/node/index.js";
import react from "file:///D:/projects/react/atom-theme-switch/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import tsconfigPaths from "file:///D:/projects/react/atom-theme-switch/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///D:/projects/react/atom-theme-switch/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\projects\\react\\atom-theme-switch";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./src/lib/AtomThemeSwitch/index.ts"),
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
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxyZWFjdFxcXFxhdG9tLXRoZW1lLXN3aXRjaFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxccmVhY3RcXFxcYXRvbS10aGVtZS1zd2l0Y2hcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL3JlYWN0L2F0b20tdGhlbWUtc3dpdGNoL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHRzY29uZmlnUGF0aHMoKSwgZHRzKHsgcm9sbHVwVHlwZXM6IHRydWUgfSldLFxuICBidWlsZDoge1xuICAgIC8vIGxpYnJhcnkgZW50cnkgYW5kIG91dHB1dCBzZXR0aW5nc1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvbGliL0F0b21UaGVtZVN3aXRjaC9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ0F0b21UaGVtZVN3aXRjaCcsXG4gICAgICBmaWxlTmFtZTogJ0F0b21UaGVtZVN3aXRjaCcsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7ICAgICAvLyBidW5kbGVyIG9wdGlvbnNcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC9qc3gtcnVudGltZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAncmVhY3QvanN4LXJ1bnRpbWUnOiAncmVhY3QvanN4LXJ1bnRpbWUnLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUyxTQUFTLG9CQUFvQjtBQUNoVSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGNBQWMsR0FBRyxJQUFJLEVBQUUsYUFBYSxLQUFLLENBQUMsQ0FBQztBQUFBLEVBQzlELE9BQU87QUFBQTtBQUFBLElBRUwsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLG9DQUFvQztBQUFBLE1BQzlELE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLGFBQWEsbUJBQW1CO0FBQUEsTUFDcEQsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
