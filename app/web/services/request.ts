import { request as rq } from 'umi';

// const common = { type: 1 };

export const request = (url: string, method: string, params: any): Promise<any> => {
  return rq(`/${APP_NAME}/${url}`, {
    method,
    params,
    // params: Object.assign(common, params),
  });
};
