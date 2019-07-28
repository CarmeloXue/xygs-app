import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

class Index extends Component {
  constructor () {
    this.state = {
    }
  }

  goToDetail() {
    console.log('详情')
  }

  render () {
    return (
      <View>
        <View className="header">
          <View className="header-left">
            <Image className="head-img"></Image>
            <View>
              <View className="name">小龙坎火锅街道口店</View>
              <View className="introduction-wrap">
                <View>正宗四川火锅</View>
                <Image className="introduction-icon"></Image>
              </View>
            </View>
          </View>
          <View className="icon-arrow" onClick={this.goToDetail}></View>
        </View>

        <View className="list">
          <View className="list-item">
            <View className="auto-flex">
              <Image></Image>
              <View>店铺管理员</View>
            </View>
            <View className="right-arrow"></View>
          </View>

          <View className="list-item">
            <View className="auto-flex">
              <Image></Image>
              <View>历史活动</View>
            </View>
            <View className="right-arrow"></View>
          </View>

          <View className="list-item">
            <View className="auto-flex">
              <Image></Image>
              <View>店铺消息</View>
              <Image className="new-icon"></Image>
            </View>
            <View className="right-arrow"></View>
          </View>

          <View className="list-item">
            <View className="auto-flex">
              <Image></Image>
              <View>客服与反馈</View>
            </View>
            <Image className="phone-icon"></Image>
          </View>
        </View>

        <View className="auto-flex">
          <View className="add-btn"></View>
        </View>
      </View>
    )
  }
}

export default Index;