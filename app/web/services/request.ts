import { request as rq } from 'umi';

export const request = (url: string, method: string, params: any): Promise<any> => {
  return rq(`/${APP_NAME}/${url}`, {
    method,
    params
  })
}
