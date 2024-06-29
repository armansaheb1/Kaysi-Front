<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100" style="background: url(/regback.png);background-size: 100% ;">
      <AppHeader />
      <div class="body flex-grow-1">
        <CContainer class="px-4" lg>
          <div class="alert alert-warning wals" style="text-align: right;" v-if="detail">
            <h4>{{ detail.title }}</h4>
            <p>{{ detail.text }}</p>
          </div>
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { CContainer } from '@coreui/vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppFooter,
    AppHeader,
    AppSidebar,
    CContainer,
  },
  mounted() {
    this.get_detail()
  },
  data() {
    return {
      detail: ""
    }
  },
  methods: {
    async get_detail() {
      var id = this.$route.path.split('/')[1]
      await axios
        .get(`details/${id}`)
        .then(response => response.data)
        .then(response => {
          this.detail = response
        }
        )
    }
  }
}
</script>
