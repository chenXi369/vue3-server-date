<template>
  <div class="container">
    <day-card :data="data"></day-card>
  </div>
</template>

<script>
import getData from '@/api'
import { onMounted } from 'vue'

import DayCard from '../Day/components/Card.vue'

export default {
  name: 'DayPage',
  components: {
    DayCard
  },
  
  setup() {

    onMounted(() => {
      getData('day', '2020-7-1')
    })

    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>