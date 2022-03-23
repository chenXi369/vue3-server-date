<template>
  <div class="dashboard">
    <home-item 
      :homeData="homeData"
    /> 
  </div>
</template>

<script>
import { reactive } from 'vue'

import HomeItem from '@/components/HomeItem/index.vue'

export default {
  name: 'Dashboard',
  components: {
    HomeItem
  },
  setup() {
    const homeData = reactive([
      { name: '今日油价', path: '/oilPrice' },
      { name: '新闻头条', path: '/headline' },
      { name: '节假日期', path: '/holiday/day' }
    ])

    return {
      homeData
    } 
  }
}
</script>
