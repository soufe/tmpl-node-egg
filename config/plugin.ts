import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  validate: {
    enable: true,
    package: 'egg-validate',
  },

  mysql: {
    enable: false,
    package: 'egg-mysql',
  },

  redis: {
    enable: false,
    package: 'egg-redis',
  },
};

export default plugin;
