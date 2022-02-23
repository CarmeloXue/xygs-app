import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtInput, AtForm, AtList, AtListItem, AtAvatar, AtMessage } from 'taro-ui'

import './index.scss'
import { navigateToEdit } from '../../utils/navigation';

@inject('userStore')
@inject('appStore')
@observer
class PersonInfo extends Component {

    config = {
        navigationBarTitleText: '个人信息'
    }

    render() {

        return (
            <View className='person-info-container'>
                <View className='avatar'>
                    <Text>头像</Text>
                    <View className='images'>
                        <AtAvatar size='large' circle={true} image='https://jdc.jd.com/img/200' />
                        <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                </View>

                <AtList>
                    <AtListItem
                        title='昵称'
                        arrow='right'
                        onClick={() => navigateToEdit('nickname')}
                    />
                    <AtListItem
                        title='学校'
                        arrow='right'
                        onClick={() => navigateToEdit('school')}

                    />
                    <AtListItem
                        title='性别'
                        arrow='right'
                        onClick={() => navigateToEdit('gender')}

                    />
                    <AtListItem
                        title='手机'
                        arrow='right'
                        onClick={() => navigateToEdit('phone')}

                    />
                    <AtListItem
                        title='个人签名'
                        arrow='right'
                        onClick={() => navigateToEdit('signature')}

                    />
                </AtList>
            </View>
        )
    }
}

export default PersonInfo 
