import { Controller } from 'egg';

const createRule = {
  type: 'string',
  token: 'string',
};

export default class HomeController extends Controller {

  /**
   * @description: render index
   * @param {*} none - none
   * @return {*} index.html
   */
  public async index(): Promise<any> {
    const { ctx } = this;
    await ctx.render('index.html');
  }

  /**
   * @description: request user get()
   * @param {String} type - request type
   * @param {string} token - user token
   * @return {Promise} status 200 and response.data
   */
  public async get(): Promise<any> {
    const { ctx, app, service } = this;
    const { request: { method }, query: { type } } = ctx;
    const token = `${app.config.USER_TOKEN}`;

    ctx.validate(createRule, { type, token });
    const result = await service.v1.user.get(method, type, token);
    ctx.status = 200;
    ctx.body = result;
  }
}
