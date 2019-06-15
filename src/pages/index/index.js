import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'
import HomeBanner from '../../components/HomeBanner';
import './index.less'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
  }

  componentWillReact() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='index'>
        <HomeBanner />
      </View>
    )
  }
}

export default Index
