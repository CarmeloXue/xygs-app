import Taro, {useState,useEffect,useCallback} from '@tarojs/taro'
import { AtInput, AtForm, AtMessage ,AtButton, AtCheckbox} from 'taro-ui'


const schoolOptions = [
    {
        label:'武汉理工大学',
        value:'武汉理工大学'
    },
    {
        label:'华中师范大学',
        value:'华中师范大学'
    },
    {
        label:'武汉大学',
        value:'武汉大学'
    },
    {
        label:'华中科技大学',
        value:'华中科技大学'
    },
    {
        label:'华中农业大学',
        value:'华中农业大学'
    },
    {
        label:'湖北大学',
        value:'湖北大学'
    },
    {
        label:'其他学校',
        value:'其他学校'
    }
]

const genderOptions = [
    {
        label:'男',
        value:'男'
    },
    {
        label:'女',
        value:'女'
    }
]


const SingleCheck = props =>{
    const [value,setValue] = useState([props.value])

    const onChange = useCallback(value =>{
        if(value.length === 2)
        setValue([value[1]])
    },[value[0]])
    

    return (
        <AtForm
            onSubmit={()=>{
                Taro.atMessage({
                    message:value,
                    type:'success'
                })
            }}
        >
            <AtMessage/>
            <AtCheckbox
                options={props.type === 'school'?schoolOptions:genderOptions}
                selectedList={value}
                onChange={onChange}
            ></AtCheckbox>

            <AtButton formType="submit">提交</AtButton>
        </AtForm>
    )


}

export default SingleCheck
