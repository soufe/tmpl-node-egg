const UA = navigator.userAgent;
export const isWx = /MicroMessenger/.test(UA);
export const isAli = /AlipayClient/.test(UA);
export const isIOS = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
export const isAndroid = UA.indexOf('Android') > -1 || UA.indexOf('Linux') > -1;
