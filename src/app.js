import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index', //首页
      'pages/news/index', //新闻
      'pages/order/index', //订单
      'pages/account/index', //个人中心
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Lottery',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: '#2F69F8',
      color: '#959596',
      backgroundColor: "#fff",//bar整体背景颜色
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/icon/icon_tab_index.png',
        selectedIconPath: './assets/icon/icon_tab_index_active.png'
      }, {
        pagePath: 'pages/news/index',
        text: '资讯',
        iconPath: './assets/icon/icon_tab_news.png',
        selectedIconPath: './assets/icon/icon_tab_news_active.png'
      }, {
        pagePath: 'pages/order/index',
        text: '订单',
        iconPath: './assets/icon/icon_tab_order.png',
        selectedIconPath: './assets/icon/icon_tab_order_active.png'
      },{
        pagePath: 'pages/account/index',
        text: '我的',
        iconPath: './assets/icon/icon_tab_my.png',
        selectedIconPath: './assets/icon/icon_tab_my_active.png'
      }]
    },
    permission: {
      "scope.userLocation": {
        "desc": "你的位置信息将用于获取当前所在位置信息展示"
      }
    },
    networkTimeout: {
      request: 60000,
      downloadFile: 60000
    }
  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
