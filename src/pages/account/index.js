import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import UserMessage from '../../components/UserMessage';
import ActionButton from './commons/ActionButton';
import './index.less'


@inject('counterStore')
@observer
class Account extends Component {

  config = {
    navigationBarTitleText: '个人中心',
    navigationBarBackgroundColor: '#2F69F8',
    navigationBarTextStyle: 'white'
  };

  componentWillMount () { }

  componentWillReact () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <UserMessage />
        <View className='action-group'>
          <ActionButton type='order' number={5}>订单</ActionButton>
          <ActionButton type='credit' number={2350}>积分</ActionButton>
          <ActionButton type='message' number={11}>消息</ActionButton>
        </View>
        <View className='help-group'>

        </View>
      </View>
    )
  }
}

export default Account
