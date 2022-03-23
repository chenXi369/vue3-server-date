<template>
  <common-header>{{ headerTitle }}</common-header>
  <search-input 
    :placeholder="placeholder"
    :maxlength="maxlength"
  />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
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

    store.commit('setPlaceholder', 'Day')

    // watch(func, func) 两个函数
    watch(() => {
      return router.currentRoute.value.name
    }, (value) => {
      store.commit('setHeaderTitle', value)
      store.commit('setPlaceholder', value)
      store.commit('setMaxLength', value)
      store.commit('setField', value)
      store.commit('setErrorCode', 0)
    })
    
    return computed(() => state).value
  }
}
</script>
