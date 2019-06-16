import Config from './index';

const baseUrl = Config.env === 'test' ? 'https://api.liritian.top/lottery/': 'https://api.liritian.top/lottery/';

export default {
  baseUrl,
  authorize: baseUrl + 'authorize/',
  base: baseUrl + 'base/',
}
