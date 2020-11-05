<template>
  <div class="Info">
    <p class="Info__name">{{ name }}</p>
    <p class="Info__desc">
      {{ description }}
      <a v-for="tag in tags" :key="tag.text" :href="tag.link" class="Info__tag">
        {{ tag.text }}
      </a>
    </p>
    <p class="Info__track">
      <a :href="track.link">{{ track.text }}</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Object as PropType<
        {
          text: string
          link: string
        }[]
      >,
      required: true,
    },
    track: {
      type: Object as PropType<{
        text: string
        link: string
      }>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@keyframes flow {
  100% {
    transform: translateX(-100%);
  }
}

.Info {
  &__name {
    margin-bottom: 8px;
  }
  &__desc {
    line-height: 1.8;
    text-align: left;
    margin-bottom: 10px;
  }
  &__tag {
    font-weight: bold;
  }
  &__track {
    width: 80%;
    font-size: 14px;
    overflow: hidden;
    margin-left: 24px;
    &:before {
      position: absolute;
      left: 10px;
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      background-image: url('/public/images/icons/note.png');
      background-size: contain;
    }
    a {
      display: inline-block;
      word-break: keep-all;
      animation: flow 7s linear infinite;
      transform: translateX(100%);
    }
  }
}
</style>
