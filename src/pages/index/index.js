import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'
import HomeBanner from '../../components/HomeBanner';
import UserService from '../../service/user';
import './index.less'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initHomePage();
  }

  initHomePage = async () => {
    const result = await UserService.helloWorld();
    console.log('测试接口结果 ==>', result);
  };

  render() {
    return (
      <View className='index'>
        <HomeBanner />
      </View>
    )
  }
}

export default Index
