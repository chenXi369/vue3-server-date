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
        min-width: 1rem;
        font-size: .18rem;
        margin-right: .15rem;
        color: #ed4040;
        line-height: .44rem;
        text-align: center;
      }

      &.content {
        font-size: .14rem;
        // display: flex;
        // align-items: center;
        line-height: .44rem;
        overflow: hidden; /*文本超出隐藏*/
        display:-webkit-box; /*盒子模型微弹性伸缩模型*/
        -webkit-box-orient: vertical; /*伸缩盒子的子元素垂直排列*/
        -webkit-line-clamp: 3; /*文本显示3行*/
      }
    }
  }
</style>