import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './shopItem.scss'


@inject('userStore')
@inject('appStore')
@observer
class ShopItem extends Component {
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
    const { userStore: { userName } } = this.props;
    const { appStore: { openId } } = this.props;
    return (
		<View>
		<View className='shopItem'>
			<Image className='img' mode='aspectFill' src='https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3d1175985fb57dccabca893ad0d20d0a' />
			<View className='shopInfo'>
				<View className='title'>无印良品台灯</View>
				<View className='desc'>无印良品小型台灯，宿舍用，便宜出卖了2年，用过十无印良品小型台灯，宿舍用，便宜出卖了2年，用过十</View>
				<View className='icons'>
					<View className='price'>¥20</View>
					<View className='extra'>可议价</View>
					<View className='favorite'>
						<AtIcon value='star' size='20' color='#4C4C4C'></AtIcon>
						<View>收藏</View>
					</View>
				</View>
			</View>
		</View>
		<View className='divider'></View>
		</View>)
  }
}

export default ShopItem
