import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import '@tarojs/async-await'
import Index from './pages/index'

import {default as userStore} from './store/user'
import {default as appStore} from './store/app'
import {default as myPubStore} from './store/myPublish'
import {default as myFavoriteStore} from './store/myFavorite'
import {default as myCollectionStore} from './store/myCollection'
import {default as myGroupStore} from './store/myGroups'




import './app.scss'
import 'taro-ui/dist/style/index.scss'
import { wxLoginAsync } from './api/wxApi';
import { getOpenId } from './api/api';


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  userStore,
  appStore,
  myPubStore,
  myFavoriteStore,
  myCollectionStore,
  myGroupStore
}

class App extends Component {

  config = {
    pages: [
      'pages/my/my',
      'pages/index/index',
      'pages/cards/index',
      'pages/collection/index',
      'pages/custom/index',
      'pages/favorite/index',
      'pages/groups/index',
      'pages/messages/index',
      'pages/publish/index',
      'pages/personInfo/index',
      'pages/edit/index',
        ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  login = async ()=>{

    try{
      const res = await wxLoginAsync()
      console.log(res.code)
      if(res.code){
        const js_code = res.code
        const openId = await getOpenId({js_code})
        console.log(openId)
        userStore.setOpenId(openId.openId)
      }
      //TODO call business api to get openid and set to userStore
    } catch(err){
      console.log("Err")
    }
  }

  componentDidMount () {
    this.login()
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
