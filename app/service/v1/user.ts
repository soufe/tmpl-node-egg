import { Service } from 'egg';

export interface UserInfo {
  rt: number,
  error: string,
  data: {
    banner_info: any[],
    comsion_info: any[],
    fans_info: object,
    integral_info: object,
    money_info: object,
    other_info: object,
    program_info: object,
    tools_info: [],
    user_info: object,
    [key: string]: any
  }
}

export default class UserService extends Service {

  /**
   * @description: request user api
   * @param {String} api - Api name
   * @param {Object} [opts] - urllib options
   * @return {Promise} response.data
   */
  public async request(method: any, api: string, opts?: any): Promise<any> {
    const { ctx, app } = this;
    const options = Object.assign({
      method,
      dataType: 'json',
      contentType: 'json',
    }, opts);

    const result = await ctx.curl(`${app.config.SOU_SERVER_URL}/${api}`, options);
    return result.data;
  }

  /**
   * @description: request sousou api to getUserInfo
   * @param {String} type - request type
   * @param {String} token - user token
   * @return {Promise} result.data
   */
  public async get(method: any, type: string, token: string): Promise<UserInfo> {

    const result = await this.request(method, 'Sougroup/UserCenter/personal_center', {
      data: { fans_token: token, http_request_type: type },
    });
    return result;
  }
}
