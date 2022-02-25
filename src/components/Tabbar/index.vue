<template>
  <div class="tabbar">
    <div 
      class="tab-item"
      v-for="(item, index) of tabData"
      :key="index"
    >
      <tab-icon
        :iconText="item.iconText"
        :path="item.path"
      >{{ item.tabText }}</tab-icon>
    </div>
  </div>
</template>

<script>
import TabIcon from './TabIcon.vue'

import tabData from '@/data/tab'

import { reactive } from 'vue'
// import { Router } from ''

export default {
  name: 'Tabbar',
  components: {
    TabIcon
  },
  setup() {
    const state = reactive({
      tabData
    })

    return {
      ...state
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabbar {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .44rem;
    border-top: 1px solid #ddd;
    background-color: #fff;

    .tab-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.33%;
      height: 100%;
    }
  }
</style>