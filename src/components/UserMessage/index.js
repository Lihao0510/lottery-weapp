import Taro, {Component} from '@tarojs/taro';
import {View, Image, Text} from '@tarojs/components';
import './index.less';
import settingIcon from '../../assets/icon/icon_setting.png';
import exitIcon from '../../assets/icon/icon_login_exit.png';

class UserMessage extends Component {

  constructor(props) {
    super(props);
  }

  goSettingPage = () => {
    Taro.navigateTo({
      url: '/pages/setting/index'
    });
  };

  handleExit = () => {
    console.log('即将退出登录 ==>');
  };

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
        <View
          onClick={this.goSettingPage}
          className='setting-button'
        >
          <Image
            className='setting-icon'
            src={settingIcon}
          />
        </View>
        <View
          onClick={this.handleExit}
          className='exit-button'
        >
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
