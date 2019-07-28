import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './card.scss'


@inject('userStore')
@inject('appStore')
@observer
class Card extends Component {
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
	
	previewImage = (image) => {
		Taro.previewImage({
			current: image,
			urls: this.props.cardInfo.images
		})
	}
	
	handleClickUser = () => {
		Taro.navigateTo({url:'/pages/index/personInfo'})
	}
	
  render() {

    const { userStore: { userName } } = this.props
    const { appStore: { openId } } = this.props
		const cardInfo = this.props.cardInfo
		var imgGroup = cardInfo.images.map((image)=>{
						return(
							<View className='img-item' onClick={this.previewImage.bind(this, image)}>
							<Image className='img-item' mode="aspectFill" style='background: #fff;width:100%;height:calc(30vw - 12PX);' src={image}/>
							</View>
						)
					})

    return (
		<View className='card'>
			<AtAvatar circle image='https://jdc.jd.com/img/200' text="用户头像" size='small' onClick={this.handleClickUser.bind(this)}></AtAvatar>
			<View className='main'>
				<View className='userInfo'>
					<View className='user'>
						<View className='nickname' onClick={this.handleClickUser.bind(this)}>{cardInfo.nickname}</View>
						<View className='time'>{cardInfo.time}</View>
					</View>
				</View>
				<View className='content'>{cardInfo.content}</View>
				<View className='img'>
				{
					imgGroup
				}
				</View>
				<View className='tags'>
					<View className='tag'>
						<AtIcon value='reload' size='22'></AtIcon>
						<Text className='tag-count'>  {cardInfo.relays}</Text>
					</View>
					<View className='tag'>
						<AtIcon value='message' size='22'></AtIcon>
						<Text className='tag-count'>  {cardInfo.comments}</Text>
					</View>
					<View className='tag tag-end'>
						<AtIcon value='heart' size='22'></AtIcon>
						<Text className='tag-count'>  {cardInfo.goods}</Text>
					</View>
				</View>
			</View>
		</View>)
  }
}

export default Card 
