import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './groupDetail.scss'


@inject('userStore')
@inject('appStore')
@observer
class Detail extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
  }
	
  componentWillMount() {
	}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() { }

  componentDidHide() { }

  setName = () => {
    const { userStore } = this.props
    userStore.setName('NoNo')
  }

  wxLogin = (res)=>{
    const { userStore } = this.props
    const {currentTarget:{userInfo}} = res
  }
	
  render() {
    const { userStore: { userName } } = this.props
    const { appStore: { openId } } = this.props,
		
    return (
		<View>
			
		</View>)
  }
}

export default Detail 
