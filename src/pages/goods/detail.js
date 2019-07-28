import { Component } from '@tarojs/taro'
import { View, Image, Swiper, Text, Input, Button } from '@tarojs/components'

import './detail.scss'

class Detail extends Component {
  config = {
    navigationBarTitleText: '宝贝详情'
  }
  render () {
    return (
      <View>
        <Swiper className="banner">
          <SwiperItem>
            <Image></Image>
          </SwiperItem>
        </Swiper>

        <View className="goods-detail">
          <View className="left">
            <View className="name">联想小新电脑</View>
            <View className="price-wrap">
              <View className="price">价格：<Image></Image><Text>150</Text></View>
              <View className="number">数量：<Text>12</Text></View>
            </View>
          </View>
          <View className="right">
            <View className="img-wrap">
              <Image></Image>
            </View>
            <View>发布时间：2019.6.13</View>
          </View>
        </View>

        <View className="introduction">
          <View className="top">
            <Image></Image>
            <View>毕业没办法带走，用了三年，入手4000+，没有用来打游戏，性能还可以。毕业没办法带走，用了三年，入手4000+，没有用来打游戏，性能还可以。</View>
          </View>
          <View className="bottom">
            <View>地点：升升公寓B栋六楼</View>
            <Image></Image>
          </View>
        </View>

        <View className="message-wrap">
          <View className="message-num">留言(5)</View>

          <View className="input-wrap">
            <Image></Image>
            <Input type="text" placeholder="请输入你的留言"></Input>
            <Button>立即留言</Button>
          </View>

          <View className="comments">
            <Image></Image>
            <View className="msg-wrap">
              <View>请问可以分期么请问可以分期么请问可以分期么请问可以分期么请问可以分期么请问可以分期么请问可以分期么</View>
              <View className="comm-time">2019.8.17</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Detail