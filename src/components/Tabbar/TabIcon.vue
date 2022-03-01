<template>
  <router-link :to="path" class="tab-icon">
    <div class="icon-area">
      <i class="icon">{{ iconText }}</i>
    </div>
    <p class="text">
      <slot>{{ tabText }}</slot>
    </p>
  </router-link>
</template>

<script>
export default {
  name: "TabIcon",
  props: {
    iconText: String,
    path: String,
  },
};
</script>

<style lang="scss" scoped>
.tab-icon {
  width: 80%;
  display: inline-block;
  .icon-area {
    width: 100%;
    display: flex;
    justify-content: center;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
      background-color: #ddd;
      color: #999;
      font-size: 0.12rem;
      transition: all 0.5s;
    }
  }

  .text {
    font-size: 0.12rem;
    text-align: center;
    margin-top: 0.02rem;
    color: #999;
    transition: color 0.5s;
  }

  &.router-link-active {
    .icon {
      background-color: #ed4040;
      color: #fff;
    }

    .text {
      color: #ed4040;
    }
  }
}
</style>