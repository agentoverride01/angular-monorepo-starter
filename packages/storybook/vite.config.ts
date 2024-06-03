import { defineConfig, ViteDevServer, mergeConfig } from 'vite'
import { join } from 'node:path'

import angular from '@analogjs/vite-plugin-angular'
import defaultConfig from '../tools/vite.config'

import { getParentDir, viteAlias } from '../tools/src/utils'

console.log(viteAlias(getParentDir('packages/storybook')))

export default mergeConfig(defaultConfig, {
  resolve: {
    alias: viteAlias(getParentDir('packages/storybook')),
  },
  plugins: [
    {
      name: 'watcher',
      configureServer({ watcher, hot }: ViteDevServer) {
        watcher.on('change', (path: string) => {
          hot.send({ type: 'full-reload', path })
        })
      }
    },
    angular({ 
      jit: true, 
      tsconfig: join(process.cwd(), 'tsconfig.json'),
      inlineStylesExtension: 'scss'
    }),
    {
      name: '@storybook/angular',
      transform(code: string) {
        if (code.includes('"@storybook/angular"')) {
          return code.replace(/\"@storybook\/angular\"/g, '\"@storybook/angular/dist/client\"')
        }
        return
      }
    }
  ]
})