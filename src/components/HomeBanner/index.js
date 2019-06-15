import Taro, {Component} from '@tarojs/taro';
import {Swiper, SwiperItem, View, Image, Text} from '@tarojs/components';
import Assets from '../../assets/remote';
import './index.less';

class HomeBanner extends Component {

  bannerList = [
    {img: Assets.bannerMock1, title: '高帅赵教你如何秒射'},
    {img: Assets.bannerMock2, title: '在线叫鸡,请点这里'},
    {img: Assets.bannerMock3, title: '在线教学送人头'},
    {img: Assets.bannerMock4, title: '高帅赵教你如何吹箫'},
  ];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Swiper
        className='banner-container'
        indicatorColor='#aaa'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        {
          this.bannerList.map((banner) => {
            return (
              <SwiperItem
                key={banner.title}
                taroKey={banner.title}
              >
                <View className='banner-item'>
                  <Image
                    className='banner-img'
                    src={banner.img}
                    mode='aspectFill'
                  />
                  <Text className='banner-title'>{banner.title}</Text>
                </View>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    )
  }
}

export default HomeBanner;
