<template>
  <div class="list-wrapper">
    <ul class="homeItem-list">
      <item 
        v-for="item in homeData"
        :key="item"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'HomeList',
  components: {
    Item
  },
  props: {
    homeData: Array,
    default: () => []
  }
}
</script>
