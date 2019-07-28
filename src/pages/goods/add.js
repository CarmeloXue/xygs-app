import { Component } from '@tarojs/taro'
import { View, Image, Picker, Input, Button, Textarea, Switch } from '@tarojs/components'

import './add.scss'

class Add extends Component {
  config = {
    navigationBarTitleText: '闲置发布'
  }

  constructor(props) {
    super(props)
    this.state = {
      typeArray: ['书籍', '日用品', '服饰', '美妆', '数码电器', '其他'],
      selectorChecked: '书籍',
      nums: 1,
    }
  }

  onChangeType (e) {
    this.setState({
      selectorChecked: this.state.typeArray[e.detail.value]
    })
  }

  onLessNums () {
    if (this.state.nums > 1) {
      this.setState({
        nums: this.state.nums - 1,
      })
    }
  }

  onAddNums () {
    if (this.state.nums < 99) {
      this.setState({
        nums: this.state.nums + 1,
      })
    }
  }

  render() {
    return (
      <View className="wrap">
        <View className="title">
          <View>标题：</View>
          <Input placeholder="品类、名称..."></Input>
        </View>

        <View className="detail">
          <View>详细描述：</View>
          <Textarea placeholder="原价、新旧、出手原因等..."></Textarea>
        </View>

        <View className="input-img-wrap">
          <View className="input-wrap">
            <Image></Image>
          </View>
          <View className="input-wrap">
            <Image></Image>
          </View>
          <View className="input-wrap">
            <Image></Image>
          </View>
          <View className="input-wrap">
            <Image></Image>
          </View>
          <View className="input-wrap">
            <Image></Image>
          </View>
        </View>

        <View className="goods-type">
          <View>闲置物品类别：</View>
          <Picker className="picker" range={typeArray} onChange={this.onChangeType}>
            <View className="type">
              <View>{selectorChecked}</View>
              <View className="arrow"></View>
            </View>
          </Picker>
        </View>

        <View className="price-wrap">
          <View className="price">
            <View>价格：</View>
            <Input></Input>
            <View>元</View>
          </View>
          <View className="nums">
            <View>数量：</View>
            <Button onClick={this.onLessNums}>-</Button>
            <Input value={nums}></Input>
            <Button onClick={this.onAddNums}>+</Button>
          </View>
        </View>

        <View className="bargain">
          <View>是否接受议价</View>
          <Switch></Switch>
        </View>

        <View className="name-input">
          <View>电话：</View>
          <Input></Input>
        </View>

        <View className="name-input">
          <View>地址：</View>
          <Input></Input>
        </View>

        <Button className="submit">发布</Button>
      </View>
    )
  }
}

export default Add