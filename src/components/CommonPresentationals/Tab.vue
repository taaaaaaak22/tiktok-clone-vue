<template>
  <ul class="Tab">
    <li class="Tab__item" v-for="(item, index) in items" :key="index">
      <a :href="item.link">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Items = {
  name: string
  path: string
}

export default defineComponent({
  props: {
    items: {
      type: Object as PropType<Items[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.Tab {
  display: flex;
  justify-content: center;
  &__item {
    margin-right: 24px;
    font-size: 18px;
  }
}
</style>
