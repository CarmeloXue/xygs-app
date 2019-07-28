import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtInput, AtImagePicker, AtIcon, AtSwitch, AtTextarea, AtButton } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './createGroup.scss'


@inject('userStore')
@inject('appStore')
@observer
class CreateGroup extends Component {
	constructor (props) {
    super(props)
    this.state = {
			name:"",
			img:[],
			note:"",
			cate:"",
			cates:["吃喝玩乐","搞笑娱乐","兴趣同好","运动体育","美妆穿搭"],
			password:"",
			open: false
    }
  }
	
	config = {
	  navigationBarTitleText: '创建小组'
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
	
	nameInput = (name)=>{
		this.setState({
			name
		})
	}
	noteInput = (note)=>{
		this.setState({
			note
		})
	}
	uploadImg = (img)=>{
		if(img.length<=1){
			this.setState({
				img
			})
		}
	}
	cateInput = e => {
    this.setState({
      cate: this.state.cates[e.detail.value]
    })
  }
	handleChangePassword = e => {
		this.setState({
			password: e.target.value
		})
	}
	handleChangeOpen = open => {
		this.setState({open})
	}
	
  render() {
    const { userStore: { userName } } = this.props
    const { appStore: { openId } } = this.props
		
    return (
		<View>
		<AtInput
        name='value'
        title='小组名称'
        type='text'
        placeholder='请输入小组名称'
        value={this.state.name}
        onChange={this.nameInput.bind(this)}
      />
			<Text className='imgTitle'>组头像</Text>
			<AtImagePicker
				className='imgPicker'
				length={5}
				count={1}
				multiple={false}
				showAddBtn={this.state.img==0}
				files={this.state.img}
				onChange={this.uploadImg.bind(this)}
			/>
			<AtInput
			  name='value'
			  title='小组宣言'
			  type='text'
			  placeholder='请输入小组宣言'
			  value={this.state.note}
			  onChange={this.noteInput.bind(this)}
			/>
		<Picker mode='selector' className='picker' range={this.state.cates} onChange={this.cateInput}>
      <View className='my-picker'>
				<View>组类别</View>
				<View>{this.state.cate||"未选择"}</View>
				<AtIcon value='chevron-right' size='24' color='#333'></AtIcon>
			</View>
		</Picker>
		<AtSwitch title='是否设置小组暗号' checked={this.state.open} onChange={this.handleChangeOpen} />
		{
		this.state.open&&<AtTextarea
			className='password'
			value={this.state.password}
			onChange={this.handleChangePassword.bind(this)}
			maxLength={30}
			placeholder='输入暗号后，在加入小组时必须输入正确的暗号才能加入'
		/>
		}
		<AtButton className='submit' size='small' type='primary'>创建小组</AtButton>
		</View>)
  }
}

export default CreateGroup 
