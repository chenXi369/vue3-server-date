<template>
  <common-header>{{ headerTitle }}</common-header>
  <search-input 
    :placeholder="placeholder"
    :maxlength="maxlength"
  />
  <router-view />
  <tabbar />
</template>

<script>
import CommonHeader from '@/components/Header'
import Tabbar from '@/components/Tabbar'
import SearchInput from '@/components/Search'

import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'app',
  components: {
    CommonHeader,
    SearchInput,
    Tabbar
  },
  setup() {
    const store = useStore(),
          state = store.state,
          router = useRouter()

    router.push('/')
    store.commit('setPlaceholder', 'day')

    // watch(func, func) 两个函数
    watch(() => {
      return router.currentRoute.value.name
    }, (value) => {
      store.commit('setHeaderTitle', value)
      store.commit('setPlaceholder', value)
      store.commit('setMaxLength', value)
    })
    
    return computed(() => state).value
  }
}
</script>
