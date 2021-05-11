import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';
import { APP_NAME } from '../sfe';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.view = {
    root: path.join(appInfo.baseDir, 'app/public'),
    mapping: {
      '.nj': 'nunjucks',
      '.tpl': 'nunjucks',
      '.html': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
  };

  config.assets = {
    devServer: {
      debug: true,
      command: 'umi dev',
      env: {
        APP_ROOT: process.cwd() + '/app/web',
        PORT: '{port}',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:{port}',
        PUBLIC_PATH: 'http://127.0.0.1:{port}',
      },
    },
  };

  config.onerror = {
    errorPageUrl: '/50x.html',
  };

  config.keys = appInfo.name + '_1618389797326_sfe';

  config.jsonp = {
    // csrf: true
    // whiteList: /^https?:\/\/test.com\//,
  };

  config.security = {
    domainWhiteList: [],
  };

  config.middleware = [
    'errorHandler',
  ];

  config.errorHandler = {
    enable: true,
    match: `/${APP_NAME}/restapi`,
    ignore: '',
  };

  config.validate = {
    convert: true,
    widelyUndefined: true,
  };

  config.proxy = true;

  const bizConfig = {
    SOU_SERVER_URL: 'https://test.sousoushenbian.com',
    USER_TOKEN: '7573893fr38ovdem51q8vkrqjb5t8l24',
  };

  return {
    ...config as {},
    ...bizConfig,
  };
};
