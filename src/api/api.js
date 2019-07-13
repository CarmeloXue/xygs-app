import Request from "../utils/request";

export const getOpenId = ({js_code},mock)=>{
    return Request.get('/openid',{js_code},mock)
}

export const register = ()=>{
    return Request.post("/user",user)
}