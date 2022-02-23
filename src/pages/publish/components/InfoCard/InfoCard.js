import Taro, { Component } from '@tarojs/taro';
import { AtCard, AtIcon } from 'taro-ui'
import { View, Image, Text } from '@tarojs/components';
import './index.scss'


const images = [
    'https://www.xygs-test.xyz/images/5d29d600a1524a461440fc38',
    'https://www.xygs-test.xyz/images/5d29d600a1524a461440fc38',
    'https://www.xygs-test.xyz/images/5d29d600a1524a461440fc38',
    'https://www.xygs-test.xyz/images/5d29d600a1524a461440fc38',
    'https://www.xygs-test.xyz/images/5d29d600a1524a461440fc38',
    'https://www.xygs-test.xyz/images/5d29d600a1524a461440fc38'
]



const InfoCard = props => {

    return (
        <View className="info-container">
            <AtCard
                title="2019-07-12"
            >
                <View>
                    <Text>校园打卡，轻松的一天</Text>
                    <View className='image-container'>
                        {
                            images.filter(i => i !== '').map((src, index) => {
                                return <Image lazyLoad className='info-image' src={src} key={`infocard-${index}`} />
                            })
                        }
                    </View>
                    <View className="actions-bar">
                        <View className="action-like">
                            <AtIcon value='heart' size='30' />
                            <Text>100</Text>
                        </View>
                        <View className="action-comment">
                            <AtIcon value='message' size='30' />
                            <Text>100</Text>
                        </View>
                        <View className="action-share">
                            <AtIcon value='external-link' size='30' />
                        </View>
                    </View>
                </View>
            </AtCard>
        </View>
    )
}

export default InfoCard