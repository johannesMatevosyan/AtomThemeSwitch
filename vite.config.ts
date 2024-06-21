/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true }), svgr(
    {
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
    }
  )],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__dirname, './src/lib/main.ts'),
      name: 'AtomThemeSwitch',
      fileName: 'AtomThemeSwitch',
    },
    rollupOptions: {     // bundler options
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: "./lib/test/setup.ts",
      css: true
    }
  }
})
