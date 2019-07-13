import Taro, { Component } from "@tarojs/taro";
import { AtAvatar, AtButton, AtDivider } from "taro-ui";
import './index.scss'


const PersonCard = props => {

    return (
        <View>
            <View className='person-info'>
                <View className='name-image'>
                    <AtAvatar circle size='large' src="https://jdc.jd.com/img/200"></AtAvatar>
                    <Text className="name">老街烧烤</Text>
                </View>

                <AtButton size='small'>取消关注</AtButton>
            </View>
            <AtDivider height={50} />
        </View>

    )
}

export default PersonCard