<template>
  <CRow class="justify-content-center" style="overflow: hidden;">
    <CCol :md="8">
      <CCardGroup>
        <CCard class="p-4" style="width: 60%!important; float: left!important">
          <CCardBody>
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
                  <CButton @click="login()" color="primary" class="px-4 form-control"> ورود </CButton>
                </CCol>
                <CCol :xs="12" class="text-right">
                  <CButton color="link" class="px-0">
                    فراموشی رمز ؟
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard class="text-white bg-primary py-5" style="width: 38%">
          <CCardBody class="text-center">
            <div>
              <h2>ثبت نام</h2>
              <p>
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
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  methods: {
    async login() {
      var formData = {
        username: this.username.toLowerCase(),
        password: this.password
      }
      await axios
        .post('/token/login', formData)
        .then(response => {
          const token = response.data.auth_token
          this.$store.commit('setToken', token)
          axios.defaults.headers.common.Authorization = 'Token ' + token
          this.$store.state.isAuthenticated = true
          localStorage.setItem('token', token)
          this.$store.state.loginpop = false
          this.$store.state.loginpopmini = false
          this.$store.state.registerpop = false
          const toPath = this.$route.go || '/dashboard'
          this.$router.push(toPath)

        }

        )
    }
  }
}

</script>
