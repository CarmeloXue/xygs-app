import App from '../store/app'

class Request {

    constructor(){
        this.baseUrl = 'https://www.xygs-test.xyz'
        this.requestCount = 0
    }

    get = (url,params,mock,token)=>{

        if(mock){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve({
                        openId:mock.id
                    })
                },2*1000)
            })
        }
        const keys = []
        Object.keys(params).forEach(key=>{
            keys.push({
                key,
                value:params[key]
            })
        })
        const finalUrl = this.baseUrl + url + '?';

        const mappedParams =  keys.reduce((acc,current)=>`${acc}&${current.key}=${current.value}`,finalUrl)
        console.log(finalUrl)

        return new Promise((resolve,reject)=>{
            wx.request({
                url: mappedParams,
                method:'GET',
                header:{
                    'Authorization':App.access_token
                },
                success(res){
                    resolve(res)
                },
                fail(err){
                    reject(err)
                }
            })
        })
    }

    post = (url,data)=>{
        return new Promise((resolve,reject)=>{
            wx.request({
                url:`${this.baseUrl}/${url}`,
                method:'POST',
                data,
                header:{
                    'Authorization':App.access_token
                }
            })
        })
    }

}


export default  new Request()