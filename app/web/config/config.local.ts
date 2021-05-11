import { APP_NAME } from '../../../sfe'

export default {
  proxy: {
    [`/${APP_NAME}/restapi`]: {
      target: 'http://127.0.0.1:7001/',
      changeOrigin: true,
    },
  },
};
