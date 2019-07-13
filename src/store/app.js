import {observable,action} from 'mobx'
import User from './user'
class App {

    @observable openId = ''

    @observable access_token = ''

    @action.bound
    login(){

    }
}

export default new App()