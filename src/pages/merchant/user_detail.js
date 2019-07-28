import Taro, { Component } from '@tarojs/taro'
import { View, Image, Checkbox, Label, CheckboxGroup, Button } from '@tarojs/components'
import './user_detail.scss'

class UserDetail extends Component {
  config = {
    navigationBarTitleText: '商家信息'
  }

  render () {
    return (
      <View>
        <View className="header auto-flex">
          <View className="auto-flex">
            <View>店铺头像</View>
            <Image></Image>
          </View>
          <View className="right-arrow"></View>
        </View>

        <View className="item-wrap">
          <View className="item auto-flex">
            <View className="auto-flex">
              <View>店铺名称</View>
              <View className="name">whut--理工小白</View>
            </View>
            <Image className="write-icon"></Image>
          </View>

          <View className="item auto-flex">
            <View className="auto-flex">
              <View>商家电话</View>
              <View className="name">18202795261</View>
            </View>
            <Image className="write-icon"></Image>
          </View>

          <View className="item auto-flex">
            <View className="auto-flex">
              <View>营业时间</View>
              <View className="name">周一至周五 10:00~22:00  </View>
            </View>
            <Image className="write-icon"></Image>
          </View>

          <View className="item auto-flex address-wrap">
            <View className="auto-flex">
              <View>店铺地址</View>
              <View className="address">洪山区珞喻路100号广埔屯资讯广场B1楼（近华师北大门）</View>
            </View>
            <Image className="write-icon"></Image>
          </View>

          <View className="item auto-flex">
            <View>辐射学校</View>
            <View className="right-arrow"></View>
          </View>

          <View className="item auto-flex">
            <View>商家相册</View>
            <View className="right-arrow"></View>
          </View>

          <View className="item auto-flex introduction">
            <View>商家介绍</View>
            <Image className="write-icon"></Image>
          </View>
          <View className="introduction-text">中/晚餐提供 品牌故事：轻松、活泼、调侃、酒吧风 餐厅服务：沙发位、卡座 人均50~100元 招牌菜：菲力牛排、番茄意面</View>
        </View>

        <CheckboxGroup>
          <View className="mask auto-flex">
            <ScrollView scrollY className="range-wrap">
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>
              <Label className="range-item auto-flex">
                <View className="rang-name">武汉理工大学</View>
                <Checkbox></Checkbox>
              </Label>

              <View className="button-wrap">
                <Button>确定</Button>
              </View>
            </ScrollView>
          </View>
        </CheckboxGroup>
      </View>
    )
  }
}

export default UserDetail