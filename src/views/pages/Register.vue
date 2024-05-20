<template>
  <Vcode :show="isShow" @success="register()" @close="onClose" />
  <div class="bg-body-tertiary min-vh-100  align-items-center" style="padding-top: 150px">



    <CRow class="justify-content-center">
      <CCol :md="9" :lg="7" :xl="6">
        <CCard class="mx-4">
          <CCardBody class="p-4">
            <button @click="$store.state.registerpop = false" style="float:left;color: white;  border-radius: 50%"
              class="btn btn-secondary">-</button>
            <CForm>
              <h1>Register</h1>
              <p class="text-body-secondary">Create your account</p>
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <CIcon icon="cil-user" />
                </CInputGroupText>
                <CFormInput v-model="username" placeholder="نام کاربری" autocomplete="username" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>@</CInputGroupText>
                <CFormInput v-model="first_name" placeholder="نام" autocomplete="email" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>@</CInputGroupText>
                <CFormInput v-model="last_name" placeholder="نام خانوادگی" autocomplete="email" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>@</CInputGroupText>
                <CFormInput v-model="mobile" placeholder="موبایل" autocomplete="email" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <CIcon icon="cil-lock-locked" />
                </CInputGroupText>
                <CFormInput v-model="password" type="password" placeholder="کلمه عبور" autocomplete="new-password" />
              </CInputGroup>
              <CInputGroup class="mb-4">
                <CInputGroupText>
                  <CIcon icon="cil-lock-locked" />
                </CInputGroupText>
                <CFormInput v-model="repassword" type="password" placeholder="تکرار کلمه غبور"
                  autocomplete="new-password" />
              </CInputGroup>
              <div class="d-grid">
                <CButton @click="isShow = true" color="success">ساخت حساب کاربری</CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from 'axios'
import Vcode from "vue3-puzzle-vcode";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  components: {
    Vcode
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    async register() {
      if (this.password == this.repassword) {
        await axios
          .post('/users/', {
            username: this.username.toLowerCase(),
            password: this.password,
            name: this.first_name,
            lastname: this.last_name,
            mobile: this.mobile
          })
          .then(response => {
            this.$store.state.registerpop = false

          }

          ).catch(() => {
            this.isShow = false
          })
      } else {
        alert('پسورد با تکرار یکی نیست')
        this.isShow = false
      }
    }
  }
}

</script>
