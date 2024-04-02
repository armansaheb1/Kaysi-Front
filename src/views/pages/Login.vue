<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>ورود</h1>
                  <p class="text-body-secondary">ورود به حساب کاربری</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput v-model="username" placeholder="نام کاربری" autocomplete="username" />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput v-model="password" type="password" placeholder="کلمه عبور"
                      autocomplete="current-password" />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton @click="login()" color="primary" class="px-4"> ورود </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        فراموشی رمز ؟
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>ثبت نام</h2>
                  <p>
                    اگر هنوز موفق به ثبت نام نشده اید.
                  </p>
                  <CButton @click="$store.state.registerpop = true; $store.state.loginpop = false;" color="light"
                    variant="outline" class="mt-3">
                    ثبت نام کنید
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
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
          const toPath = this.$route.go || '/dashboard'
          this.$router.push(toPath)
          this.$store.state.loginpop = false
          this.$store.state.registerpop = false
        }

        )
    }
  }
}

</script>
