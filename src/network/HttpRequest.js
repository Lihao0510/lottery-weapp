import Taro from '@tarojs/taro';
import UrlList from '../config/url-list';

function request({url, method = 'GET', data, header}, service = 'authorize') {
  return Taro.request({
    url: UrlList[service] + url,
    method,
    data,
    header: {
      'content-type': 'application/json',
      ...header
    }
  })
}

export default request;
