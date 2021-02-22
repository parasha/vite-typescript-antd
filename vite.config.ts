import path from 'path';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: [
      '.js', '.ts', '.jsx', '.tsx'
    ],
  },
  css:{
    modules:{
      scopeBehaviour: 'local'
    }
  },
  // 全局变量
  define: {
    
  },
  optimizeDeps: {
    include: ["echarts", '@ant-design/icons-vue', 'ant-design-vue/es/date-picker/locale/zh_CN']
  },
  plugins: [
    vue(), // 提供 vue 单文件组件支持
    vueJsx(), // 提供 jsx 支持
  ],
}); 