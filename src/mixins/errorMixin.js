import { onActivated } from 'vue'
import { useStore } from 'vuex'

export default function() {
  
  onActivated(() => {
    const store = useStore(),
          state = store.state

    const arrState = Array.from(state.setField)
  
    console.log(arrState)
    if(arrState && !arrState.length) {
      store.commit('setErrorCode', 10012)
    }
  })
}

