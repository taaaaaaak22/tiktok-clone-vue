<template>
  <div class="App">
    <Video class="App__video" />
    <Footer class="App__footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Video from '../Presentationals/Video.vue'
import Footer from '../Presentationals/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Video,
    Footer,
  },
})
</script>
