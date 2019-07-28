import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { AtTabs, AtTabsPane, AtAvatar, AtIcon, AtLoadMore } from 'taro-ui';
import { observer, inject } from '@tarojs/mobx';
import './personInfo.scss';
import Card from '../../components/card';
import GroupItem from '../../components/groupItem';
import ShopItem from '../../components/shopItem';


@inject('userStore')
@inject('appStore')
@observer
class PersonInfo extends Component {
	constructor (props) {
    super(props)
    this.state = {
			currentTab: 0,
			loadMoreStatue:"more",
			refreshStatus:"more",
			topFixed:false,
    }
  }

  config = {
    navigationBarTitleText: '',
		"enablePullDownRefresh": true,
		onReachBottomDistance:50,
  }

  componentWillMount() {
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
  }
	
	handleClickTab = (val)=>{
		this.setState({
			currentTab:val
		})
	}
	onPullDownRefresh(){
		this.setState({
			refreshStatus: "loading"
		})
		setTimeout(()=>{
			this.setState({
				refreshStatus: "noMore"
			})
		},1000)
		setTimeout(()=>{
			this.setState({
				refreshStatus: "more"
			})
			Taro.stopPullDownRefresh()
		},2000)
	}
	onReachBottom(){
		console.log("more")
	}
	
  render() {
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
    const { userStore: { userName } } = this.props;
    const { appStore: { openId } } = this.props;
		const tabList = [{ title: '动态' }, { title: '校园小组' }, { title: '闲置好物' }];

    return (<View>
		{
			this.state.refreshStatus!='more'&&<AtLoadMore
				status={this.state.refreshStatus}
				loadingText={"正在刷新"}
				noMoreText={"刷新成功"}
			/>
		}
		<View className='top'>
			<View className='top-content'>
				<View className='left'>
					<AtAvatar circle image='https://jdc.jd.com/img/200' text="用户头像" size='large'></AtAvatar>
					<View className='text'>
						<View className='nickname'>campus_木子老叟</View>
						<View className='count-info' decode='true'>
							关注 98  粉丝 1238
						</View>
					</View>
				</View>
				<View className='right'>
					<View className='chat'>
						<AtIcon value='message' size='22' color='white'></AtIcon>
					</View>
					<View className='add'>
						+关注
					</View>
				</View>
			</View>
			<View className='signature'>一觉醒来，发现我还活着。。</View>
		</View>
		<AtTabs current={this.state.currentTab} tabList={tabList} onClick={this.handleClickTab.bind(this)}>
      <AtTabsPane current={this.state.currentTab} index={0} >
			<View className='firstPage'>
				<Card cardInfo={cardInfo} />
				<Card cardInfo={cardInfo} />
				<Card cardInfo={cardInfo} />
				<Card cardInfo={cardInfo} />
			</View>
      </AtTabsPane>
      <AtTabsPane current={this.state.currentTab} index={1}>
			<View className='secondPage'>
				<GroupItem groupInfo={groupInfo} />
				<GroupItem groupInfo={groupInfo} />
				<GroupItem groupInfo={groupInfo} />
				<GroupItem groupInfo={groupInfo} />
			</View>
      </AtTabsPane>
      <AtTabsPane current={this.state.currentTab} index={2}>
      <View className='thirdPage'>
				<ShopItem />
				<ShopItem />
				<ShopItem />
				<ShopItem />
				<ShopItem />
			</View>
			</AtTabsPane>
    </AtTabs>
		</View>)
  }
}

export default PersonInfo 
