<template>

  <Vcode successText=" باموفقیت انجام شد" sliderText="Slide" :show="isshowl" @success="login()" @close="onClose" />
  <div class="pad"
    style="position: fixed;top:0;left:0; height: 100%;width: 100%;z-index: 100000000000000000000000000000000000000;background-color: rgba(0, 0, 0, 0.7);">
    <CRow class="justify-content-center" style="overflow: hidden;">
      <CCol :md="8">
        <CCardGroup v-if="!forg">
          <CCard class="p-4" style="height: 310px;width: 60%!important; float: left!important">
            <CCardBody>
              <div style="margin-top: -30px;" v-if="this.myerror" class="alert alert-danger">
                {{ myerror }}
              </div>
              <CForm>
                <h1>ورود</h1>
                <CInputGroup class="mb-3" style="direction: ltr">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <CFormInput v-model="username" placeholder="نام کاربری" autocomplete="username" />
                </CInputGroup>
                <CInputGroup class="mb-4" style="direction: ltr">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput v-model="password" type="password" placeholder="کلمه عبور"
                    autocomplete="current-password" />
                </CInputGroup>
                <CRow>
                  <CCol :xs="12">
                    <CButton @click="isshowl = true" color="primary" class="px-4 form-control"> ورود </CButton>
                  </CCol>
                  <CCol :xs="12" class="text-right">
                    <CButton @click="forg = true" color="link" class="px-0">
                      فراموشی رمز ؟
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard class="text-white bg-primary py-5" style="height: 310px;width: 38%">
            <CCardBody class="text-center">
              <div>
                <h2>ثبت نام</h2>
                <p style="font-size: 12px;">
                  اگر هنوز موفق به ثبت نام نشده اید.
                </p>
                <CButton @click="$store.state.loginpop = false; $store.state.registerpop = true;" color="light"
                  variant="outline" class="mt-3">
                  ثبت نام کنید
                </CButton>
              </div><br>
            </CCardBody>
          </CCard>
        </CCardGroup>
        <CCard v-else style="height: 210px;width: 98%!important; float: left!important">
          <CCardBody>
            <div style="margin-top: -30px;" v-if="this.myerror" class="alert alert-danger">
              {{ myerror }}
            </div>
            <CForm>
              <h4>فراموشی کلمه عبور</h4>
              <CInputGroup class="mb-3" style="direction: ltr">
                <CInputGroupText>
                  <CIcon icon="cil-user" />
                </CInputGroupText>
                <CFormInput v-model="email" placeholder="ایمیل" autocomplete="username" />
              </CInputGroup>

              <CRow>
                <CCol :xs="12">
                  <CButton @click="forget()" color="primary" class="px-4 form-control"> ورود </CButton>
                </CCol>
                <CCol :xs="12" class="text-right">
                  <CButton @click="forg = false" color="link" class="px-0">
                    بازگشت به ورود
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { CCard } from '@coreui/vue';
import axios from 'axios'
import Vcode from "vue3-puzzle-vcode";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      isshowl: false,
      myerror: '',
      forg: false,
      email: ''
    }
  },
  components: {
    Vcode
  },
  mounted() {
    if (this.$store.state.isAuthenticated) {
      const toPath = this.$route.go || '/dashboard'
      this.$router.push(toPath)
    }
  },
  methods: {
    async login() {
      await axios
        .post('/token/login', {
          username: this.username.toLowerCase(),
          password: this.password
        })
        .then(response => {
          this.myerror = ''
          const token = response.data.auth_token
          this.$store.commit('setToken', token)
          axios.defaults.headers.common.Authorization = 'Token ' + token
          this.$store.state.isAuthenticated = true
          localStorage.setItem('token', token)
          this.$store.state.loginpop = false
          this.$store.state.loginpopmini = false
          this.$store.state.registerpop = false

          axios.defaults.headers.common['Authorization'] = "Token " + token
          setTimeout(() => {
            this.vorood()
          }, 500);
          const toPath = this.$route.go || '/dashboard'
          this.$router.push(toPath)
          this.isshowl = false

        }

        ).catch(data => {
          this.isshowl = false;
          this.myerror = 'نام کاربری یا کلمه عبور اشتباه است'

          setTimeout(() => {
            this.myerror = ''
          }, 3000);
        })
    },
    async vorood() {
      await axios
        .post('/vorood', {
          username: this.username.toLowerCase(),
        })
    },
    async forget() {
      await axios
        .post('/forgetreq', {
          email: this.email.toLowerCase(),
        })
    }
  }
}

</script>
<style>
.pad {
  padding: 10% 2%;
}

@media only screen and (max-width: 700px) {
  .pad {
    padding: 35% 2%;
  }
}
</style>