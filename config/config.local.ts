import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.assets = {
    devServer: {
      debug: true,
      autoPort: true,
    },
    dynamicLocalIP: false,
  };

  config.security = {
    csrf: false,
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/sfe',
      options: {},
      // plugins: [createdPlugin, [updatedPlugin, pluginOptions]]
    },
  };

  config.mysql = {
    client: {
      host: 'mysql.com',
      port: '3306',
      user: 'test_user',
      password: 'test_password',
      database: 'test',
    },
    app: true,
    agent: false,
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'auth',
      db: 0,
    },
  };

  return config;
};
