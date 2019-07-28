import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtAvatar, AtList, AtListItem } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import Card from '../../components/card'
import GroupItem from '../../components/groupItem';
import './index.scss'


@inject('userStore')
@inject('appStore')
@observer
class Index extends Component {
	constructor (props) {
    super(props)
    this.state = {
      current: 0,
			currentItem: "new",
			currentPage: "square",
			topFixed: false,
    }
  }

  config = {
    navigationBarTitleText: '拾趣社'
  }

  componentWillMount() {
		console.log('componentWillMount')
	}

  componentWillReact() {
    
  }

  componentDidMount() { }

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
    //TODO set userinfo
    console.log(res)
  }
	
	handleClickTab = (value) => {
    this.setState({
      current: value
    })
  }
	
	handleClickItem = (item) => {
		this.setState({
			currentItem: item
		})
	}
	
	handleClickPage = (page) => {
		this.setState({
			currentPage: page
		})
	}
	
	handleClickPublish = () => {
		Taro.navigateTo({url:'/pages/index/publish'})
	}
	handleClickCreateGroup = () => {
		Taro.navigateTo({url:'/pages/index/createGroup'})
	}
	handleClickDicover = () => {
		Taro.navigateTo({url:'/pages/index/groupDiscover'})
	}
	getAbsTop = (obj)=>{
		var top = obj.offsetTop;
		while(obj.offsetParent != null){
			obj = obj.offsetParent;
			top += obj.offsetTop;
		}
		return top;
	}
	onPageScroll = (obj) => {
		if(obj.scrollTop>=188){
			this.setState({
				topFixed: true
			})
		}else{
			this.setState({
				topFixed: false
			})
		}
	}
  render() {

    const { userStore: { userName } } = this.props
    const { appStore: { openId } } = this.props
		const cardInfo = {
			avatar:'https://jdc.jd.com/img/200',
			nickname: '理工小白',
			time: '昨天',
			content: '校园公社第一天，打卡校园公社第一天，打卡校园公社第一天，打卡校园公社第一天，打卡',
			images: ['https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7',
			'https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7',
			'https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7',
			'https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7',
			'https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7'],
			relays:23,
			comments:34,
			goods:129
		}
		const groupInfo = {
			name:"篮球社",
			note: "无篮球，不兄弟",
			avatar: "https://jdc.jd.com/img/200",
			count: "129人"
		}

    return (<View>
			<View className='header'>
			<AtButton type={this.state.currentPage=='square'?'primary':'secondary'} size='small' circle={true} className={this.state.currentPage=='square'?'activeBtn':'normalBtn'} onClick={this.handleClickPage.bind(this, 'square')} >广场</AtButton>	
			<AtButton type={this.state.currentPage=='group'?'primary':'secondary'} size='small' circle={true} className={this.state.currentPage=='group'?'activeBtn':'normalBtn'} onClick={this.handleClickPage.bind(this,'group')}>校园小组</AtButton>	
			</View>
			{this.state.currentPage=='square' && <View className='squarePage'>
				<View className='at-icon at-icon-add publishBtn' onClick={this.handleClickPublish.bind(this)}></View>
				<Swiper
				  className='swiper'
				  circular
				  autoplay>
				  <SwiperItem className='swiperItem'>
				    <Image
						className="img"
				    src='https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7'
				  />
				  </SwiperItem>
				  <SwiperItem className='swiperItem'>
				    <Image
							className="img"
				      src='https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7'
				    />
				  </SwiperItem>
				  <SwiperItem className='swiperItem'>
				    <Image
							className="img"
							src='https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7'
						/>
				  </SwiperItem>
				</Swiper>
				<View className={topFixed?'items top-fixed':'items'} id='fixedTop'>
					<View className='tags'>
						<Text 
						className={this.state.currentItem=='new'?'item active':'item'} 
						onClick={this.handleClickItem.bind(this,'new')}>
						最新</Text>
						<Text 
						className={this.state.currentItem=='hot'?'item active':'item'} 
						onClick={this.handleClickItem.bind(this,'hot')}>
						最热</Text>
						<Text
						className={this.state.currentItem=='concentrate'?'item active':'item'} 
						onClick={this.handleClickItem.bind(this,'concentrate')}>
						关注</Text>
					</View>
					<View className='at-icon at-icon-search'></View>
				</View>
				<View className='divider'></View>
				<View className='cards'>
					<Card cardInfo={cardInfo} />
					<Card cardInfo={cardInfo} />
					<Card cardInfo={cardInfo} />
				</View>
				</View>
			}
			{this.state.currentPage=='group' && <View className='groupPage'>
				<View className='divider'></View>
				<View className='header'>
					<View>我的小组</View>
					<View className='create' onClick={this.handleClickCreateGroup.bind(this)}>创建小组</View>
				</View>
				<View className='groups'>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
					<View className='group'>
						<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
						<Text>表白墙</Text>
					</View>
				</View>
				<View className='divider'></View>
				<AtList>
					<AtListItem
						title='发现小组'
						arrow='right'
						hasBorder={false}
						onClick={this.handleClickDicover.bind(this)}
					/>
				</AtList>
				<GroupItem groupInfo={groupInfo} />
				<GroupItem groupInfo={groupInfo} />
			</View>
			}
		</View>)
  }
}

export default Index 
