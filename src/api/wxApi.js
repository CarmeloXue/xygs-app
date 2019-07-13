
const promisfy = (fn)=>{

    return new Promise((resolve,reject)=>{
        fn({
            success(res){
                resolve(res)
            },
            fail(err){
                reject(err)
            }
        })
    })
}

console.log(wx)

export const wxLoginAsync = ()=>promisfy(wx.login)