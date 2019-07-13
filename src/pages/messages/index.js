import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtInput, AtForm, AtList, AtListItem, AtAvatar, AtMessage } from 'taro-ui'

@inject('userStore')
@inject('appStore')
@observer
class Message extends Component {

  config = {
    navigationBarTitleText: '我的消息'
  }

  render() {

    return (
      <View>
       <Text>Messages</Text>
      </View>
    )
  }
}

export default Message 
