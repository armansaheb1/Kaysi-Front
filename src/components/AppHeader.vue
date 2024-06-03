<template>

  <CHeader position="sticky" :class="headerClassNames">
    <CContainer class="border-bottom px-4" fluid>
      <CHeaderToggler @click="$store.commit('toggleSidebar')" style="margin-inline-start: -14px">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>



      <CHeaderNav class="d-none d-md-flex">

      </CHeaderNav>

      <CHeaderNav class="ms-auto">
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle @click="notread()" :caret="false">
            <CIcon icon="cil-bell" size="lg" />
            <a v-if="unread != 0" style="color: red;border-radius: 50%;width: 10px;">{{ unread
              }}</a>
            <a v-else style="color: green;border-radius: 50%;width: 10px;">{{ unread
              }}</a>
          </CDropdownToggle>
          <CDropdownMenu>
            <div v-for="item in notifs" v-bind:key="item">
              <CDropdownItem v-if="!item.read" style="background-color: antiquewhite;direction: rtl;text-align: right;"
                class="align-items-center">
                <h5>{{ item.title }}</h5>
                <p>{{ item.text }}</p>
              </CDropdownItem>
              <CDropdownItem v-else style="direction: rtl;text-align: right;" class="align-items-center">
                <h5>{{ item.title }}</h5>
                <p>{{ item.text }}</p>
              </CDropdownItem>
            </div>
          </CDropdownMenu>
        </CDropdown>

      </CHeaderNav>
      <CHeaderNav>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
        <select @change="changelang()" v-model="lang">
          <option value="fa">فارسی</option>

          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <CIcon v-if="colorMode === 'dark'" icon="cil-moon" size="lg" />
            <CIcon v-else-if="colorMode === 'light'" icon="cil-sun" size="lg" />
            <CIcon v-else icon="cil-contrast" size="lg" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem :active="colorMode === 'light'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('light')">
              <CIcon class="me-2" icon="cil-sun" size="lg" /> Light
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'dark'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('dark')">
              <CIcon class="me-2" icon="cil-moon" size="lg" /> Dark
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'auto'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('auto')">
              <CIcon class="me-2" icon="cil-contrast" size="lg" /> Auto
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CContainer class="px-4" fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useColorModes } from '@coreui/vue'
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
  },
  methods: {
    changelang() {
      function setCookie(cname, cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (100 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      localStorage.setItem('lang', this.lang)
      this.$store.state.lang = this.lang
      setCookie('googtrans', `/fa/${this.$store.state.lang}`);
      location.reload()
    },

    async get_notifs() {
      await axios
        .get(`notifications`)
        .then(response => response.data)
        .then(response => {
          this.notifs = response
          this.unread = 0
          for (var item of response) {
            if (!item.read) {
              this.unread = this.unread + 1
            }
          }
        })
    },
    async notread() {
      await axios
        .post(`notifications`)
        .then(response => response.data)
        .then(response => {
          this.notifs = response
          this.unread = 0
          for (var item of response) {
            if (!item.read) {
              this.unread = this.unread + 1
            }
          }
        })
    },


  },
  mounted() {
    this.get_notifs()
    this.lang = this.$store.state.lang
  },
  data() {
    return {
      lang: 'fa',
      notifs: [],
      unread: 0
    }
  },

  setup() {
    const headerClassNames = ref('mb-4 p-0')
    const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')

    onMounted(() => {
      document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 0) {
          headerClassNames.value = 'mb-4 p-0 shadow-sm'
        } else {
          headerClassNames.value = 'mb-4 p-0'
        }
      })
    })

    return {
      headerClassNames,
      colorMode,
      setColorMode,
    }
  },
}
</script>
<style></style>