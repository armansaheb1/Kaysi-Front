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
import VueSweetalert2 from 'vue-sweetalert2';
import moment from "moment-jalaali";
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import 'primevue/resources/themes/aura-light-green/theme.css'
axios.defaults.baseURL = 'https://www.ryanai.ir/api/v1/'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)

app.use(moment)
app.use(VueSweetalert2)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('CAlert', CAlert)
app.component('DocsExample', DocsExample)
app.mount('#app')
