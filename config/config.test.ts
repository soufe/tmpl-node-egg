import { EggAppConfig, PowerPartial } from 'egg';
import { APP_NAME } from '../sfe';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.alinode = {
    appid: '88194',
    secret: 'bda5c13c3ce84effb50718baae6ecaa26c427c55',
  };

  config.logger = {
    dir: `/data/wwwlogs/node_test/${APP_NAME}`,
  };

  const bizConfig = {

  };

  return {
    ...config as {},
    ...bizConfig,
  };
};
