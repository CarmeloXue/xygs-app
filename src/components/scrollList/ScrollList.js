import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import './index.scss'
import InfoCard from '../../pages/publish/components/InfoCard/InfoCard';
import GoodsCard from '../../pages/publish/components/GoodsCard/GoodsCard';
import PersonCard from '../../pages/favorite/components/PersonCard';
import GroupCard from '../../pages/groups/components/GroupCard';



const ScrollList = props => {

    return (
        <ScrollView
            style="height:100%;margin-top:15px"
            scrollY
            scrollWithAnimation
            lowerThreshold={50}
            enableBackToTopß
            onScrollToLower={props.loadMore}
        >
            {
                props.source.filter(s => s.title !== '').map((item, index) => {

                    if (props.type === 'publish-info') {
                        return <InfoCard />
                    }
                    if (props.type === 'publish-goods') {
                       return <GoodsCard />
                    }
                    if(props.type === 'favorite'){
                        return <PersonCard />
                    }
                    if(props.type.split('-')[0] === 'group'){
                        return <GroupCard type={props.type.split('-')[1]}/>
                    }
                    // return (
                    //     <View
                    //         key={`${item.title}-${index}`}
                    //         className="item-card"
                    //     >
                    //         <Text>{index}</Text>
                    //         <Text>{item.title}</Text>
                    //     </View>
                    // )
                })
            }

        </ScrollView>
    )

}

export default ScrollList