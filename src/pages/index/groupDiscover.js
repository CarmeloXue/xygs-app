import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import { AtTabsPane, AtTabs} from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './groupDiscover.scss'
import GroupItem from '../../components/groupItem'


@inject('userStore')
@inject('appStore')
@observer
class GroupDiscover extends Component {
	constructor (props) {
    super(props)
    this.state = {
			current: 0
    }
  }
	
	config = {
	  navigationBarTitleText: '发现小组'
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
	handleClick (value) {
    this.setState({
      current: value
    })
  }
	
  render() {
    const { userStore: { userName } } = this.props;
    const { appStore: { openId } } = this.props;
		const groupInfo = {
			name:"篮球社",
			note: "无篮球，不兄弟",
			avatar: "https://jdc.jd.com/img/200",
			count: "129人"
		}
    return (
		<View>
		<AtTabs
			current={this.state.current}
			scroll
			tabDirection='vertical'
			tabList={[
				{ title: '标签页1' },
				{ title: '标签页2' },
				{ title: '标签页3' },
				{ title: '标签页4' },
				{ title: '标签页5' },
				{ title: '标签页6' }
			]}
			onClick={this.handleClick.bind(this)}>
			<AtTabsPane current={this.state.current} index={0}>
				<View style='font-size:18px;text-align:center;height:100px;'>
					<GroupItem groupStyle='detail' groupInfo={groupInfo} />
				</View>
			</AtTabsPane>
			<AtTabsPane current={this.state.current} index={1}>
				<View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
			</AtTabsPane>
			<AtTabsPane current={this.state.current} index={2}>
				<View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
			</AtTabsPane>
			<AtTabsPane current={this.state.current} index={3}>
				<View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
			</AtTabsPane>
			<AtTabsPane current={this.state.current} index={4}>
				<View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
			</AtTabsPane>
			<AtTabsPane current={this.state.current} index={5}>
				<View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
			</AtTabsPane>
		</AtTabs>
		</View>)
  }
}

export default GroupDiscover 
