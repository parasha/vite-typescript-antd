import { UserConfig } from 'vite';
import path from 'path';
import { createJsxPlugin } from "vite-jsx/plugin";

const config: UserConfig = {
  // proxy: {
  //   // with options
  //   '/api': {
  //     target: 'http://jsonplaceholder.typicode.com',
  //     changeOrigin: true,
  //     rewrite: path => path.replace(/^\/api/, '')
  //   }
  // },
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  define:{
    'ENV': process.env.APP_ENV
  },
  optimizeDeps: {
    include: ["lodash", "echarts"]
  },
  plugins: [
    createJsxPlugin(), // jsx 支持 vue 原生指令
  ],
}

export default config;