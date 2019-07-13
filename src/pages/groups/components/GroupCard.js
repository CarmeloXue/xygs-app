import Taro, { Component } from "@tarojs/taro";
import { AtAvatar, AtButton, AtDivider, AtIcon } from "taro-ui";
import './index.scss'


const GroupCard = props => {

    return (
        <View>
            <Text>2019年10月10日</Text>
            <View className='person-info'>
                <View className='name-image'>
                    <AtAvatar size='large' src="https://jdc.jd.com/img/200"></AtAvatar>
                    <Text className="name">篮球社</Text>
                </View>

               {props.type==='create'?<AtButton size='small'>管理</AtButton>:<AtIcon value='close' size='20'/>} 
            </View>
            <AtDivider height={50} />
        </View>

    )
}

export default GroupCard