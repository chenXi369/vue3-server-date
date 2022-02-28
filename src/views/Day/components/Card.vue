<template>
  <div class="card-wrapper">
    <section class="card">
      <div class="header">
        <span class="weekday">{{ data.weekday }}</span>
      </div>
      <h1 class="text lunar">{{ data.lunar }}</h1>
      <h2 class="text date">{{ data.date }}</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DayCard',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
  .card-wrapper {
    padding: .15rem;
    box-sizing: border-box;

    .card {
      background: url('~@/assets/img/bg.jpg') no-repeat center/cover;
      border-radius: .15rem;
      overflow: hidden;
      border: 1px solid #ddd;
      color: #fff;

      .header {
        height: .35rem;
        padding: .1rem;
        box-sizing: border-box;
        font-size: .14rem;
        background-color: rgba(0, 0, 0, .3);
      }

      .text {
        text-align: center;
        margin: .3rem 0;
        text-shadow: .02rem .05rem .05rem #666;

        &.lunar {
          color: #f75555;
          font-size: .5rem;
          font-weight: bold;
        }

        &.date {
          font-size: .2rem;
        }
      }
    }
  }
</style>