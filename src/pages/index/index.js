import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtInput, AtForm } from 'taro-ui'
import './index.scss'


@inject('userStore')
@inject('appStore')
@observer
class Index extends Component {

  state = {
    phone: ''
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  wxLogin = (res) => {
    const { userStore } = this.props

    const { currentTarget: { userInfo } } = res

    if(!this.state.phone){

      return
    }

    if(!userInfo){

      return
    }
    userStore.setWechatDetail(userInfo)

    //TODO set userinfo
    console.log(res)
  }


  render() {

    const { userStore: { openId } } = this.props
    const { appStore } = this.props



    return (
      <View className='app'>

        <AtForm>
          <AtInput
            type="phone" 
            value={this.state.phone}
            onChange={()=>this.setState({phone:value})}
            placeholder="请输入绑定手机号"  
          />
        </AtForm>
        <Image
          mode="widthFix"
          className="image"
          src="http://ec2-18-218-40-213.us-east-2.compute.amazonaws.com:7001/images/5d1cb7c2a6069b1f76f96b1a" />
        <Button className="btn" open-type="getUserInfo" onGetUserInfo={this.wxLogin}>进入App</Button>
      </View>
    )
  }
}

export default Index 
