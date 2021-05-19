import qs from 'qs';
import wx from '@sousoufe/jssdk';
import { POST } from '@/services/http';
import { isIOS } from './client';
import { request } from 'umi';

export interface Config {
  hide: boolean;
  title: string;
  desc: string;
  imgUrl: string;
  entryUrl: string;
}

export default async (config: Config) => {
  const { hide, title, desc, imgUrl, entryUrl } = config;
  const link = window.location.href;
  const debug = false;
  const authUrl = window.location.href;
  const {
    data: { appId, timestamp, nonceStr, signature },
  } = await request(`/${APP_PROXY}/${APP_WXCONFIG}`, {
    method: POST,
    data: qs.stringify({ type: 1, url: encodeURIComponent(isIOS ? entryUrl : authUrl) }),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  wx.config({
    debug,
    appId,
    timestamp,
    nonceStr,
    signature,
    jsApiList: [
      'checkJsApi',
      'chooseWXPay',
      'hideAllNonBaseMenuItem',
      'updateTimelineShareData',
      'updateAppMessageShareData',
    ],
  });

  wx.ready(() => {
    wx.updateAppMessageShareData({
      title,
      desc,
      link,
      imgUrl,
    });

    wx.updateTimelineShareData({
      title,
      link,
      imgUrl,
    });

    if (hide) wx.hideAllNonBaseMenuItem();
  });
  wx.error();
};
