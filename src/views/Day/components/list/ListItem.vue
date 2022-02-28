<template>
  <div class="list-item">
    <div class="block title">{{ title }}</div>
    <div class="block content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: String,
    content: String
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    display: flex;
    flex-direction: row;
    height: .44rem;
    margin-bottom: .15rem;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: .1rem;
    
    .block {
      height: 100%;

      &.title {
        width: 1rem;
        font-size: .18rem;
        margin-right: .15rem;
        color: #ed4040;
        line-height: .44rem;
        text-align: center;
      }

      &.content {
        display: flex;
        align-items: center;
        font-size: .14rem;
      }
    }
  }
</style>