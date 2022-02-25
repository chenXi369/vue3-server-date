<template>
  <div class="container">
    
  </div>
</template>

<script>
import getData from '@/api'
import { onMounted } from 'vue'

export default {
  name: 'MonthPage',
  
  setup() {
    onMounted(() => {
      getData('month', '2020-7')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>