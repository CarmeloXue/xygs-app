import { observable, computed, action } from 'mobx'

class User {
    @observable nickName = ''
    @observable gender = ''
    @observable region = ''
    @observable country = ''
    @observable openId = ''

    @action.bound
    setName(name) {
        this.userName = name
    }

    @action.bound
    setOpenId(openId) {
        this.openId = openId
    }

    @action.bound
    setWechatDetail(wechatUser) {
        this.nickName = wechatUser.nickName
        this.gender = wechatUser.gender
        this.region = wechatUser.region
        this.country = wechatUser.country
    }
}

export default new User()