import * as dotenv from 'dotenv';

let PROXY;
let WXCONFIG;
const ENV = process.env;
const result = dotenv.config();

if (result.error) throw result.error;

switch (ENV.APP_API) {
  case '0':
    PROXY = 'apizsm';
    WXCONFIG = 'Sougroup/Public/getJsSdkByUrl';
    break;
  case '1':
    PROXY = 'apisou';
    WXCONFIG = 'Souweb/Wechat/getsignPackage';
    break;
  case '2':
    PROXY = 'apibc';
    WXCONFIG = 'Souweb/Wechat/getsignPackage';
    break;
  default:
    PROXY = 'apisou';
    WXCONFIG = 'Souweb/Wechat/getsignPackage';
    break;
}

export const APP_NAME = ENV.APP_NAME;
export const APP_PROXY = PROXY;
export const APP_OSS = ENV.APP_OSS;
export const APP_WXCONFIG = WXCONFIG;
