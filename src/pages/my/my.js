import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtInput, AtDivider, AtList, AtListItem, AtAvatar, AtMessage } from 'taro-ui'
import { navigateTo,PAGE_NAME_MAP } from '../../utils/navigation'
import './index.scss'

@inject('userStore')
@inject('appStore')
@observer
class My extends Component {

  config = {
    navigationBarTitleText: '我的'
  }


  render() {

    return (
      <View>
        <AtMessage />
        <View className='userInfo' onClick={() => navigateTo('PersonInfo')}>
          <View className='info'>
            <AtAvatar size='large' circle={true} image='https://jdc.jd.com/img/200' />
            <View className='text'>
              <Text>我的名字</Text>
              <Text>武汉理工大学</Text>
            </View>
          </View>
          <View className='at-icon at-icon-chevron-right'></View>
        </View>
        <AtDivider/>
        <AtList>
          <AtListItem
            title='我的发布'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={()=>navigateTo('Publish')}
          />
           <AtListItem
            title='我的关注'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={()=>navigateTo('Favorite')}

          />
           <AtListItem
            title='我的收藏'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={()=>navigateTo('Collection')}

          />
           <AtListItem
            title='我的卡包'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={()=>navigateTo('Cards')}

          />
           <AtListItem
            title='校园小组'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={()=>navigateTo('Groups')}

          />
           <AtListItem
            title='我的消息'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={()=>navigateTo('Message')}

          />
           <AtListItem
            title='我的客服'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            onClick={()=>navigateTo('Custom')}
          />
        </AtList>
      </View>
    )
  }
}

export default My 
