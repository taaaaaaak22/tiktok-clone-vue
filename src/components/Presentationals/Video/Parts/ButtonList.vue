<template>
  <ul class="ButtonList">
    <li class="ButtonList__item">
      <div class="ButtonList__dammyProfile"></div>
      <div class="ButtonList__plus">
        <img src="/public/images/icons/plus.svg" width="24" />
      </div>
    </li>
    <li class="ButtonList__item">
      <FavoriteIcon />
      <p class="ButtonList__text">1.1M</p>
    </li>
    <li class="ButtonList__item">
      <MessageIcon />
      <p class="ButtonList__text">10.2K</p>
    </li>
    <li class="ButtonList__item">
      <ShareIcon />
      <p class="ButtonList__text">22.7K</p>
    </li>
    <li class="ButtonList__item">
      <div class="ButtonList__track">
        <img src="/public/images/icons/track001.png" />
        <TrackIcon />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueComponent as FavoriteIcon } from '../../../../assets/icons/favorite.svg'
import { VueComponent as MessageIcon } from '../../../../assets/icons/comment.svg'
import { VueComponent as ShareIcon } from '../../../../assets/icons/share.svg'
import { VueComponent as TrackIcon } from '../../../../assets/icons/track.svg'
import { VueComponent as PlusIcon } from '../../../../assets/icons/plus.svg'

export default defineComponent({
  components: {
    FavoriteIcon,
    MessageIcon,
    ShareIcon,
    TrackIcon,
    PlusIcon,
  },
})
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ButtonList {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &__item {
    margin-bottom: 20px;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__text {
    text-align: center;
    font-size: 12px;
  }
  &__dammyProfile {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 auto;
  }
  &__plus {
    margin-top: -14px;
  }
  &__track {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin 10s linear infinite;
    margin-top: 20px;
    img {
      position: absolute;
      width: 60%;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}
</style>
