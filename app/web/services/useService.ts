import { GET, POST } from './http';
import { request } from './request';

export interface UserInfo {
  type: number,
  token: string
}

export const getUserInfo = (params: UserInfo): Promise<any> => {
  return request('restapi/v1/user', GET, params);
};

export const postUserInfo = (params: UserInfo): Promise<any> => {
  return request('restapi/v1/user', POST, params);
};
