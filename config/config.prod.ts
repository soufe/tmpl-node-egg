import { EggAppConfig, PowerPartial } from 'egg';
import { APP_NAME } from '../sfe';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.alinode = {
    appid: '88194',
    secret: 'bda5c13c3ce84effb50718baae6ecaa26c427c55',
  };

  config.logger = {
    dir: `/data/wwwlogs/node_pro/${APP_NAME}`,
  };

  const bizConfig = {
    SOU_SERVER_URL: 'https://www.sousoushenbian.com',
    USER_TOKEN: '7573893fr38ovdem51q8vkrqjb5t8l24',
  };

  return {
    ...config as {},
    ...bizConfig,
  };
};
