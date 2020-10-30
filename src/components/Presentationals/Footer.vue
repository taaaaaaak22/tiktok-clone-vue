<template>
  <footer class="Footer">
    <ul class="Footer__list">
      <li v-for="(item, index) in items" :key="index" class="Footer__item">
        <a href="Footer__link">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const items = [
      {
        name: 'home',
        text: 'レコメンド',
      },
    ]

    return {
      items,
    }
  },
})
</script>

<style lang="scss" scoped>
.Footer {
  &__list {
    display: flex;
    justify-content: space-between;
  }
}
</style>
