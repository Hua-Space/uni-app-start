import uni from '@dcloudio/vite-plugin-uni'
// eslint-disable-next-line import/no-unresolved
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const isProd = process.env.NODE_ENV === 'production'
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `APP_` 前缀。
  // ENV load https://cn.vitejs.dev/guide/env-and-mode.html
  const env = loadEnv(mode, __dirname, 'APP_')
  return {
    // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。 https://cn.vitejs.dev/config/shared-options.html#envprefix
    envPrefix: env.APP_NAME,
    plugins: [
      uni(),
      // 自动导入 https://github.com/antfu/unplugin-auto-import
      AutoImport({
        dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
        imports: [
          'vue',
          'uni-app',
          'pinia',
          {
            // '@/helper/pinia-auto-refs': ['useStore']
          }
        ],
        // 目录下的模块导出自动导入
        // 默认只扫描目录下的一级模块
        //ssssss
        dirs: [
          // './hooks',
          // './composables' // only root modules
          // './composables/**', // all nested modules
        ],
        // 自定义解析器，兼容`unplugin-vue-Components`
        // see https://github.com/antfu/unplugin-auto-import/pull/23/
        resolvers: [
          /* ... */
        ],
        // resolvers: [VantResolver()],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: 'true' // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/')
      },
      extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    server: {
      host: true,
      // open: true,
      port: Number(env.APP_PORT ?? ''),
      hmr: {
        overlay: true
      }
    },
    // 自定义全局变量
    define: {
      'process.env': {}
    },
    // 构建配置
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].${new Date().getTime()}.js`,
          chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
          assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
          compact: true
        }
      }
    }
  }
})
