import { observable, computed, action } from 'mobx'

const mockItem = [
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    },
    {
      title:'Collection'
    }
  ]
  

class MyCollection {
    
    @observable currentTab = 0

    @observable infos = {
        loading:false,
        source:[],
        hasMore:false
    }

    @observable goods = {
        loading:false,
        source:[],
        hasMore:false
    }


    @action.bound
    onTabChange(value){
        const type = value === 0? 'infos':'goods'
        const currentType = value === 0?'goods':'infos'

        if(this[currentType].loading) return
        this.currentTab = value
        if(this[type].source.length === 0 ){
            this.onLoad()
        }

    }

    @action.bound
    onLoad(){
        const type = this.currentTab === 0? 'infos':'goods'

        this[type].loading = true
        setTimeout(()=>{
            this[type].source = [...mockItem]
            this[type].loading = false
            this[type].hasMore = true
            
        },1500)
    }

    @action.bound
    loadMore(){
        const type = this.currentTab === 0?'infos':'goods'

        if(this[type].hasMore){
            this[type].loading = true
            setTimeout(()=>{
                this[type].source = [...this[type].source,...mockItem]
                this[type].loading = false
            },1500)
        }
    }

}

export default new MyCollection()