import { defineConfig } from 'umi';
import routes from './routes';
import { APP_NAME } from '../../../sfe';

export default defineConfig({
  hash: true,
  base: `/${APP_NAME}/`,
  outputPath: '../public',
  publicPath: `/${APP_NAME}/public/`,
  manifest: {
    fileName: '../../config/manifest.json',
  },
  headScripts: [],
  analytics: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  cssLoader: {
    localsConvention: 'camelCase',
  },
  cssModulesTypescriptLoader: {},
  define: {
    APP_NAME: `${APP_NAME}`,
  },
  favicon: `/${APP_NAME}/public/image/favicon.ico`,
  styles: [],
  theme: {
    '@sou-base-color': '#000000',
  },
  dva: {},
  title: '嗖嗖身边',
  plugins: [ '@alitajs/hd' ],
  hd: {
    theme: {},
    px2rem: {
      rootValue: 100,
      unitPrecision: 5,
      propWhiteList: [],
      propBlackList: [],
      exclude: false,
      selectorBlackList: [],
      ignoreIdentifier: false,
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
});
