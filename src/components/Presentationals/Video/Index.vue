<template>
  <div class="Video">
    <Tab :items="tabItems" class="Video__tab" />
    <video src=""></video>
    <Info
      :name="video.user.name"
      :description="video.description"
      :tags="video.tags"
      :track="video.track"
      class="Video__info"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Tab from '../../CommonPresentationals/Tab.vue'
import Info from './Parts/Info.vue'

export default defineComponent({
  components: {
    Tab,
    Info,
  },
  setup() {
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

    const video = {
      url: '',
      user: {
        name: '@名前',
      },
      description: '説明文説明文説明文説明文説明文説明文説明文説明文説明文',
      tags: [
        {
          text: '#hashtag1',
          link: '/',
        },
        {
          text: '#hashtag2',
          link: '/',
        },
      ],
      track: {
        text: '曲名曲名曲名曲名曲名曲名曲名',
        link: '/',
        image: 'hoge.jpg',
      },
    }

    return {
      tabItems,
      video,
    }
  },
})
</script>

<style lang="scss" scoped>
.Video {
  width: 100%;
  height: 100%;
  background-color: #000;
  &__tab {
    padding-top: 20px;
  }
  &__info {
    width: 80%;
    position: absolute;
    left: 0;
    bottom: 70px;
    text-align-last: left;
    padding-left: 10px;
  }
}
</style>
