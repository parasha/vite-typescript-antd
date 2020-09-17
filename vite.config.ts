import { UserConfig } from 'vite';
import path from 'path'

const config: UserConfig = {
  // new webpack.DefinePlugin({
  //   'process.env': env
  // }),
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
  optimizeDeps: {
    include: ["lodash", "echarts"]
  }
}

export default config;