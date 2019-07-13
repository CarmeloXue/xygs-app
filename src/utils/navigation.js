import Taro from '@tarojs/taro';

export const PAGE_NAME_MAP = {
    Publish:'/pages/publish/index',
    My:'/pages/my/my',
    Cards:'/pages/cards/index',
    Collection:'/pages/collection/index',
    Custom:'/pages/custom/index',
    Favorite:'/pages/favorite/index',
    Groups:'/pages/groups/index',
    Message:'/pages/messages/index',
    Home:'/pages/index/index',
    PersonInfo:'/pages/personInfo/index',
    Edit:'/pages/edit/index'
}


export const navigateTo = name =>{
    Taro.navigateTo({
        url:PAGE_NAME_MAP[name]
    })
}

export const navigateToEdit = title =>{
    Taro.navigateTo({
        url:`/pages/edit/index?title=${title}`
    })
}