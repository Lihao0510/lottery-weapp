import Taro, {Component} from '@tarojs/taro';
import {View, Image, Text} from '@tarojs/components';
import './index.less';
import orderIcon from '../../../assets/icon/icon_account_order.png';
import messageIcon from '../../../assets/icon/icon_message.png';
import creditIcon from '../../../assets/icon/icon_credit.png';

const iconList = {
  order: orderIcon,
  message: messageIcon,
  credit: creditIcon,
};

class ActionButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        className='button-container'
      >
        <Image className='action-icon' src={iconList[this.props.type]} />
        <Text className='amount-text'>{this.props.number}</Text>
        <Text className='type-text'>{this.props.children}</Text>
      </View>
    )
  }
}

export default ActionButton;
