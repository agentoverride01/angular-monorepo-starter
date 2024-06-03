import { resolve } from 'path'
import { mergeConfig } from 'vite'

import analog from '@analogjs/platform'

import defaultConfig from './vite.config'

export default mergeConfig(defaultConfig, {
  plugins: [
    analog({ 
      ssr: false, 
      static: true,
      vite: {
        tsconfig: resolve('./src/tsconfig.app.json'),
        inlineStylesExtension: 'scss'
      }
    }) 
  ]
})