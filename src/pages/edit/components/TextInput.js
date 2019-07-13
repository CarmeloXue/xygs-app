import Taro, {useState,useEffect} from '@tarojs/taro'
import { AtInput, AtForm, AtMessage ,AtButton} from 'taro-ui'

const TextInput = props =>{
    const [nickName,setNickname] = useState(props.value)

    let title, type = 'text',placeholder = '请输入'
    if(props.type === 'nickname'){
        title='昵称'
    } else if(props.type === 'phone') {
        title='手机号',
        type='phone'
    } else if(props.type === 'signature'){
        title='个人签名'
    } 
    placeholder += title

    console.log(`${title},${type},${placeholder}`)

    return (
        <AtForm
            onSubmit={()=>{
                Taro.atMessage({
                    message:nickName,
                    type:'success'
                })
            }}
        >
            <AtMessage/>
            <AtInput
                title={title}
                type={type}
                value={nickName}
                placeholder={placeholder}
                onChange={setNickname}
            ></AtInput>
            <AtButton formType='submit'>提交</AtButton>
        </AtForm>
    )


}

export default TextInput