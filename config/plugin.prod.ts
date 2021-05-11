import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  alinode: {
    enable: true,
    package: 'egg-alinode',
  },

  mongoose: {
    enable: false,
    package: 'egg-mongoose',
  },
};

export default plugin;
