<template>
  <header class="header">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader'
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

    h1 {
      font-size: .18rem;
      color: #fff;
    }
  }
</style>
