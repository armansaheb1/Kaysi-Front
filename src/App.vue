<template>
  <router-view />

  <vue-final-modal style="width:100% ; background:none; overflow-y: auto" v-model="$store.state.loginpop">
    <login />
  </vue-final-modal>


  <vue-final-modal style="background:none; overflow: hidden; margin: 5%; margin-top: 1% ; width: 95%"
    v-model="$store.state.loginpopmini">
    <loginmini />
  </vue-final-modal>

  <vue-final-modal style="width:100% ; background:none; overflow-y: auto" v-model="$store.state.registerpop">
    <register />
  </vue-final-modal>

</template>
<script>
import axios from 'axios'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useColorModes } from '@coreui/vue'
import login from './views/pages/Login.vue'
import loginmini from './views/pages/Loginmini.vue'
import register from './views/pages/Register.vue'
import { VueFinalModal } from 'vue-final-modal'


export default {
  setup() {
    const { isColorModeSet, setColorMode } = useColorModes(
      'coreui-free-vue-admin-template-theme',
    )
    const store = useStore()

    onBeforeMount(() => {
      const urlParams = new URLSearchParams(window.location.href.split('?')[1])
      const theme =
        urlParams.get('theme') &&
        urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
      if (theme) {
        setColorMode(theme)
        return
      }

      if (isColorModeSet()) {
        return
      }

      setColorMode(store.state.theme)
    })
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
      this.$store.state.isAuthenticated = true
    } else {
      axios.defaults.headers.common['Authorization'] = ""
      this.$store.state.isAuthenticated = false
    }
  },
  components: {
    login,
    VueFinalModal,
    register,
    loginmini
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Yekan'
}

.card-header {
  direction: rtl
}

.card-body {
  direction: rtl
}

// Import Main styles for this application
@import 'styles/style';
// We use those styles to show code examples, you should remove them in your application.
@import 'styles/examples';
</style>
