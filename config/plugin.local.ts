import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  alinode: {
    enable: false,
    package: 'egg-alinode',
  },

  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};

export default plugin;
