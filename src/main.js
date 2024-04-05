import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/components/DocsExample'
import axios from 'axios'
import { CAlert } from '@coreui/vue';
import '@coreui/coreui/dist/css/coreui.min.css'

axios.defaults.baseURL = 'https://www.ryanai.ir/api/v1/'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('CAlert', CAlert)
app.component('DocsExample', DocsExample)

app.mount('#app')
