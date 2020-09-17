import { UserConfig } from 'vite';
import path from 'path'

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
  }
}

export default config;