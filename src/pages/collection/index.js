import Taro, { Component } from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx'
import { AtTabs, AtTabsPane, AtToast } from 'taro-ui'
import ScrollList from '../../components/scrollList/ScrollList';

const DT = '动态'
const XZ = '闲置'


@inject('myCollectionStore')
@observer
export default class Collection extends Component {

  config = {
    navigationBarTitleText: '我的收藏'
  }

  state = {
    current: DT,
    loading: true,
    source: [],
    hasMore: true,
  }

  componentDidMount = () => {
    const { myCollectionStore } = this.props
    myCollectionStore.onLoad()
  }

  onTabChange = value => {
    const { myCollectionStore } = this.props

    myCollectionStore.onTabChange(value)
  }

  loadMore = () => {
    if (this.state.hasMore) {
      this.setState({
        loading: true
      })
      setTimeout(() => {
        this.setState({
          source: [...this.state.source, ...mockItem],
          loading: false
        })
      }, 3000)
    }


  }

  render() {
    const list = [
      {
        title: DT
      },
      {
        title: XZ
      }
    ]
    const { myCollectionStore: { currentTab, infos, goods, loadMore } } = this.props
    return (
      <View className='my-publish-container'>
        <AtToast isOpened={currentTab ? goods.loading : infos.loading} status='loading' text='加载中' />
        <AtTabs current={currentTab} tabList={list} onClick={this.onTabChange}>
          <AtTabsPane index={0} current={currentTab}>
            <View style="height:90vh">
              {currentTab === 0 &&
                <ScrollList type={'publish-info'} source={infos.source} loadMore={loadMore} />}
            </View>
          </AtTabsPane>
          <AtTabsPane index={1} current={currentTab}>
            <View style="height:90vh">
              {currentTab === 1 &&
                <ScrollList type={'publish-goods'} source={goods.source} loadMore={loadMore} />
              }
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}