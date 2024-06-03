<template>
  <router-view />

  <vue-final-modal
    style="position: fixed; top:50px;width:100% ; background:none; overflow-y: auto; z-index: 1000!important"
    v-model="$store.state.loginpop">
    <login />
  </vue-final-modal>


  <vue-final-modal
    style="position: fixed; top:50px;background:none; overflow: hidden; margin: 10% 2.5%; width: 95%; z-index: 1000!important"
    v-model="$store.state.loginpopmini">
    <loginmini />
  </vue-final-modal>

  <vue-final-modal style="position: fixed; top:0;width:100% ; z-index: 10000!important; overflow-y: auto"
    v-model="$store.state.registerpop">
    <register />
  </vue-final-modal>

  <chat />

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
import chat from './views/pages/components/Chat.vue';

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
    loginmini,
    chat
  }
}
</script>

<style lang="scss">
@import "~@marcoschulte/vue3-progress/dist/";

* {
  font-family: 'Yekan'
}

.card-header {
  direction: rtl
}

.card-body {
  direction: rtl
}

.arscard {
  background-color: #ffff;
}

.chat-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 80px;
  height: 80px;
  background: #ffffff;
  border-radius: 50%;
}

.chat-box {
  position: fixed;
  right: 1%;
  bottom: 3%;
  width: 25%;
  border-radius: 5%;
  z-index: 1;
}

.chat-btn:hover {
  cursor: pointer;
}

.containerss {
  right: 0;
  width: 40% !important;
  z-index: 1000;
}

@media only screen and (max-width: 700px) {
  .containerss {

    width: 100% !important;
    z-index: 1000;
  }
}



// Import Main styles for this application
@import 'styles/style';
// We use those styles to show code examples, you should remove them in your application.
@import 'styles/examples';
</style>
