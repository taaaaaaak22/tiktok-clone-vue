<template>
  <footer class="Footer">
    <nav>
      <ul class="Footer__list">
        <li class="Footer__item">
          <a href="Footer__link">
            <HomeIcon />
          </a>
        </li>
        <li class="Footer__item">
          <a href="Footer__link">
            <SearchIcon />
          </a>
        </li>
        <li class="Footer__item">
          <a href="Footer__link">
            <CreateIcon />
          </a>
        </li>
        <li class="Footer__item">
          <a href="Footer__link">
            <MessageIcon />
          </a>
        </li>
        <li class="Footer__item">
          <a href="Footer__link">
            <PersonIcon />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueComponent as HomeIcon } from '../../assets/icons/home.svg'
import { VueComponent as SearchIcon } from '../../assets/icons/search.svg'
import { VueComponent as MessageIcon } from '../../assets/icons/message.svg'
import { VueComponent as PersonIcon } from '../../assets/icons/person.svg'
import { VueComponent as CreateIcon } from '../../assets/icons/create.svg'

export default defineComponent({
  name: 'Footer',
  components: {
    HomeIcon,
    SearchIcon,
    MessageIcon,
    PersonIcon,
    CreateIcon,
  },
})
</script>

<style lang="scss" scoped>
.Footer {
  background-color: #000;
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 16px;
  }
}
</style>
