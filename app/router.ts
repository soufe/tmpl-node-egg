
import { Application } from 'egg';
import { APP_NAME } from '../sfe';

export default (app: Application) => {
  const { controller, router } = app;
  // restapi
  router.get(`/${APP_NAME}/restapi/v1/user*`, controller.v1.user.get);
  // page
  router.get('*', controller.v1.user.index);
};
