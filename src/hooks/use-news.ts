import { onMounted, Ref, ref } from 'vue'
import axios from 'axios'

export function useNews () {
  // const news = ref('公告加载中...')
  // const newsDetail = ref('详细内容')
  // const newsModal = ref(false)
  // const setModalVisible = (visible: boolean) => {
  //   newsModal.value = visible
  // }
  // return { news, newsDetail, newsModal, setModalVisible }
  const news: Ref<{ title: string, content: string }[]> = ref([])
  onMounted(async () => {
    const res = await axios.get(`https://raw.githubusercontent.com/CQUPTMirror/MirrorsNews/master/News.json`)
    news.value = res.data
  })
  const newsContent = ref('详细内容')
  const newsModal = ref(false)

  const openModal = (title: string) => {
    newsContent.value = news.value.find(item => item.title === title)!.content
    newsModal.value = true
  }
  const closeModal = () => {
    newsModal.value = false
  }
  return { news, newsContent, newsModal, openModal, closeModal }
}
