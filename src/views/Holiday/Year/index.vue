<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <card-list :data="yearData" />
    </div>
  </div>
</template>

<script>
import getData from '@/api'
import { onMounted, computed, watch } from 'vue'

import { useStore } from 'vuex'

import { getNowDate } from '@/libs/utils'

import CardList from '@/components/YearPage/List'
import ErrorTip from '@/components/ErrorTip'

export default {
  name: 'YearPage',
  components: {
    ErrorTip,
    CardList
  },
  setup() {
    const store = useStore(),
          state = store.state

    onMounted(() => {
      getData(store, 'Year', getNowDate('Year'))
    })

    watch(() => {
      return state.yearData
    }, () => {
      store.commit('setErrorCode', 0)
    })

    return {
      errorCode: computed(() => state.errorCode),
      yearData: computed(() => state.yearData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>