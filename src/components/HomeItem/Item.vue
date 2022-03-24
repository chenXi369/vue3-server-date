<template>
  <li class="home-item">
    <div class="item-card">
      <router-link class="item-link" :to="item.path">      
        <img :src="require(`../../assets/img/${item.name}.png`)" :alt="item.name" />
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
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #c2f1f3;

      .item-link {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: .8rem;
          height: .8rem;
          margin-bottom: 10px;
        }
        .title {
          text-align: center;
        }
      }
      
    }
  }
</style>