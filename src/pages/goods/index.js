import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

import { set as setGlobalData, get as getGlobalData } from '../../global_data'

class Index extends Component {
  config = {
    navigationStyle: 'custom'
  }

  constructor(props) {
    super(props)
    this.state = {
      topBarHeight: 0,
      topBarWarpHeight: 0,
      activeIndex: 0,
      classificationList: ['最新', '书籍', '日用', '服饰', '美妆', '数码电器', '其他'],
    }
  }

  componentWillMount () {
    let topBarHeight = getGlobalData('topBarHeight');
    let topBarWarpHeight = getGlobalData('topBarWarpHeight');

    this.setState({
      topBarHeight,
      topBarWarpHeight,
    })
  }

  changeClassification (e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    this.setState({
      activeIndex: index,
    })
  }

  goToDetail () {
    Taro.navigateTo({
      url: '/pages/goods/detail'
    })
  }

  render () {
    const { classificationList, activeIndex } = this.state
    const classificationItem = classificationList.map((item, index) => {
      return (
        <View
          className={activeIndex === index && 'active'}
          taroKey={index}
          onClick={this.changeClassification.bind(this)}
          data-index={index}
        >{item}</View>
      )
    })
    return (
      <View>
        <View style="height: {{topBarWarpHeight}}px"></View>
        <View className="top-bar-wrap" style="height: {{topBarWarpHeight}}px">
          <View className="top-bar" style="height: {{topBarHeight}}px">
            <Image mode="scaleToFill"></Image>
            <View className="school-name">武汉理工大学</View>
            <View className="top-bar-title">淘物社</View>
          </View>
        </View>

        <View className="classification">
          {
            classificationItem
          }
          <View>
            <Image mode="scaleToFill"></Image>
          </View>
        </View>

        <View style="margin-top: 32px">
          <View className="goods-item" onClick={this.goToDetail.bind(this)}>
            <Image mode="scaleToFill"></Image>
            <View className="goods-wrap">
              <View className="goods-name">
                <View>无印良品台灯</View>
                <Image className="collect-icon" mode="scaleToFill"></Image>
              </View>

              <View className="price">
                <View className="mark">￥</View>
                <View className="number">20</View>
                <View className="text">可议价</View>
              </View>

              <View className="address">
                <View className="address-text">
                  <Image mode="scaleToFill"></Image>
                  升升公寓B栋六楼
                </View>
                <View>2019-7-15</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index