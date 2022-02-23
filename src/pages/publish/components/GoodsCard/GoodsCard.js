import Taro, { Component } from '@tarojs/taro';
import { AtCard, AtIcon, AtButton } from 'taro-ui'
import { View, Image, Text } from '@tarojs/components';
import './index.scss'


const GoodsCard = props => {

    return (

        <AtCard
            title="2019-07-12"
        >
            <View className="info-container">
                <Image className='goods-image' lazyLoad src='https://www.xygs-test.xyz/images/5d29d600a1524a461440fc38'></Image>
                <View className='goods-text'>
                    <Text className='title'>无印良品台灯</Text>
                    <Text className='description'>无印良品小型台灯，宿舍用，便宜出，买了2年，用过十几次，我谢了很多字，买了2年，用过十几次，我谢了很多字</Text>
                    <View className='actions'>
                        <View>
                            <Text>20</Text>
                            <Text>可议价</Text>
                        </View>
                        <AtButton size='small'>呼叫回收</AtButton>
                    </View>
                </View>
            </View>
        </AtCard>
    )
}

export default GoodsCard