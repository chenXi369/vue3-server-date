<template>
  <header class="header">
    <img src="@/assets/img/back.png" @click.native="handleBack">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'CommonHeader',

  setup() {
    const router = useRouter()
    const handleBack = () => {
      router.go(-1)
    }

    return {
      handleBack
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .44rem;
    background-color: #ed4040;
    text-align: center;
    line-height: .44rem;

    img {
      width: .16rem;
      height: .16rem;
      position: absolute;
      top: .15rem;
      left: .1rem;
    }

    h1 {
      font-size: .18rem;
      color: #fff;
    }
  }
</style>
