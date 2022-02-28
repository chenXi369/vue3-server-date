import { onActivated } from 'vue'
import { useStore } from 'vuex'

export default function(filed) {
  
  onActivated(() => {
    const store = useStore(),
          state = store.state
    
    const arrState = []
    
    Array.from(state.monthData)

    if(arrState && !arrState.length) {
      store.commit('setErrorCode', 10012)
    }
  })
}

