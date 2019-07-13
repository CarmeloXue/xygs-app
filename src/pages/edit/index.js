import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtInput, AtForm, AtMessage, AtButton } from 'taro-ui'
import TextInput from './components/TextInput';
import SingleCheck from './components/SingleCheck';



@inject('userStore')
@inject('appStore')
@observer
class Edit extends Component {

    state = {
        nickname: '木子老叟',
        school: '华中科技大学',
        phone: '13570171234',
        gender: '男',
        signature: '我没有个性'
    }

    constructor(props) {
        super(props)
        const title = this.$router.params.title

        let title_CN = '';
        switch (title) {
            case 'nickname':
                title_CN = "昵称";
                break;
            case 'school':
                title_CN = "学校";
                break;
            case 'phone':
                title_CN = "手机号";
                break;
            case 'gender':
                title_CN = "性别";
                break;
            case 'signature':
                title_CN = "个人签名";
                break;
        }

        wx.setNavigationBarTitle({
            title: title_CN
        })
    }

    render() {
        const title = this.$router.params.title

        if(title === 'nickname' || title === 'phone' || title === 'signature'){
            return <TextInput type={title} value={this.state[title]} />
        } else if(title === 'gender' || title === 'school') {
            return (<SingleCheck type={title} value={this.state[title]} />)

        }
        return null
    }
}

export default Edit 
