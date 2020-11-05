<template>
  <div class="Video">
    <!-- <video src=""></video> -->
    <ButtonList class="Video__buttonList" />
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
import Info from './Parts/Info.vue'
import ButtonList from './Parts/ButtonList.vue'

export default defineComponent({
  components: {
    Info,
    ButtonList,
  },
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.Video {
  position: relative;
  width: 100vw;
  height: 100%;
  background-color: #000;
  &__info {
    width: 80%;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align-last: left;
    padding-left: 10px;
  }
  &__buttonList {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
