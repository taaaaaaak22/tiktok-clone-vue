<template>
  <Video />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Video from './components/Containers/Video.vue'

export default defineComponent({
  name: 'App',
  components: {
    Video,
  },
})
</script>
