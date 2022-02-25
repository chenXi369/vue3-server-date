<template>
  <div class="container">
    Year page
  </div>
</template>

<script>
import getData from '@/api'
import { onMounted } from 'vue'

export default {
  name: 'YearPage',
  setup() {
    onMounted(() => {
      getData('year', '2019')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>