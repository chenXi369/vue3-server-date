<template>
  <li class="home-item">
    <div class="item-card">
      <router-link :to="item.path">      
        <!-- <img :src="require(`../../assets/home/${item.name}`)" :alt="item.name" /> -->
        <div class="title">
          <h2>{{item.name}}</h2>
        </div>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'HomeItem',
  props: {
    item: Object,
    default: () => {}
  }
}
</script>

<style lang="scss" scoped>
  .home-item {
    padding: .1rem .15rem;
    box-sizing: border-box;

    .item-card {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 5px;
      border: 1px solid #eaeaea;
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        text-align: center;
      }
    }
  }
</style>