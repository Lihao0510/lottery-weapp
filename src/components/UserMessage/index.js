import Taro, {Component} from '@tarojs/taro';
import {View, Image, Text} from '@tarojs/components';
import './index.less';
import settingIcon from '../../assets/icon/icon_setting.png';
import exitIcon from '../../assets/icon/icon_login_exit.png';

class UserMessage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        className='message-container'
      >
        <View className='message-card'>
          <View className='user-avatar'>
            <open-data type='userAvatarUrl'></open-data>
          </View>
          <View class='user-nickname'>
            <Text>您尚未登录</Text>
          </View>
        </View>
        <View className='setting-button'>
          <Image
            className='setting-icon'
            src={settingIcon}
          />
        </View>
        <View className='exit-button'>
          <Image
            className='exit-icon'
            src={exitIcon}
          />
        </View>
      </View>
    )
  }
}

export default UserMessage;
