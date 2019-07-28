import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import { AtAvatar} from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './groupItem.scss'


@inject('userStore')
@inject('appStore')
@observer
class GroupItem extends Component {
	static defaultProps = {
		groupStyle:"simple"
	}
	
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
		const { groupInfo } = this.props;
		const { groupStyle } = this.props
    return (
		<View>
		{
			groupStyle!="detail"&&<View className='group-list-item'>
				<View className='info'>
					<AtAvatar image={groupInfo.avatar}></AtAvatar>
					<View className='text'>
						<View>{groupInfo.name}</View>
						<View className='note'>{groupInfo.note}</View>
					</View>
				</View>
				<View className='add'>
					<View className='add-btn'>加入</View>
					<View className='count'>{groupInfo.count}</View>
				</View>
			</View>
		}
		{
			groupStyle=="detail"&&
			<View>
			<View className='group-list-item'>
				<View className='info'>
					<AtAvatar image={groupInfo.avatar}></AtAvatar>
					<View className='text'>
						<View>{groupInfo.name}</View>
						<View className='note'>{groupInfo.count}加入</View>
					</View>
				</View>
				<View className='add add-detail'>
					<View className='add-btn'>加入</View>
					<View className='count'></View>
				</View>
			</View>
			<View className='bottom-info'>生活中的小事情往往能带给我们意想不到的效果，学习这些生活小技巧。</View>
			</View>
		}
			<View className='divider'></View>
			</View>)
  }
}

export default GroupItem 
