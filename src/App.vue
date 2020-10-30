<template>
  <div class="App">
    <ScrollView class="App__view" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScrollView from './components/Containers/ScrollView.vue'

export default defineComponent({
  name: 'App',
  components: {
    ScrollView,
  },
})
</script>

<style lang="scss" scoped>
.App {
  width: 100vw;
  height: 100vh;
}
</style>
