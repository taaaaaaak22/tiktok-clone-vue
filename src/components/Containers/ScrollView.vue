<template>
  <div class="App">
    <Tab :items="tabItems" class="App__tab" />
    <div class="App__videoList">
      <Video
        v-for="item in videos"
        :key="item.id"
        :video="item"
        class="App__video"
      />
    </div>
    <Footer class="App__footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Video from '../Presentationals/Video/Index.vue'
import Tab from '../CommonPresentationals/Tab.vue'
import Footer from '../Presentationals/Footer.vue'
import dammyData from '../../assets/data/video.ts'

export default defineComponent({
  name: 'App',
  components: {
    Tab,
    Video,
    Footer,
  },
  setup() {
    const videos = ref([])
    const getVideoList = () => {
      return dammyData
    }

    const initialVideos = getVideoList()
    videos.value.push(...initialVideos)

    const tabItems = [
      {
        name: 'フォロー中',
        link: '/',
      },
      {
        name: 'おすすめ',
        link: '/',
      },
    ]

    return {
      videos,
      getVideoList,
      tabItems,
    }
  },
})
</script>

<style lang="scss" scoped>
.App {
  position: relative;
  padding-bottom: 60px;
  &__tab {
    position: absolute;
    z-index: 100;
    width: 100%;
    top: 20px;
    text-align: center;
  }
  &__videoList {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    width: 100vw;
    height: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__video {
    scroll-snap-align: start;
  }
  &__footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
  }
}
</style>
