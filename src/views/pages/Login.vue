<template>
  <div style="width: 100%; top : 0; background-color: rgba(0, 0, 0, 0.4)">
    <nav
      style="background: black;border-bottom: rgba(150,150,150,0.2) 1px solid; width: 100%; height: 80px ;position: absolute; top: 0; z-index:  100">
      <ul style="z-index:  100; margin : 0; list-style: none;">
        <li style="margin-top: 16px" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="/">
            <img src="/logo.png" style="border-radius: 50%;height: 50px; border-radius: 50%;" alt="">
          </a>
        </li>
        <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="/">خانه</a>
        </li>
        <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="/about-us">درباره
            ما</a>
        </li>
        <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="/contact-us">تماس با
            ما</a>
        </li>




        <li v-if="!$store.state.isAuthenticated" style="" class="lil"><a
            style="font-size: 12px!important; color: whitesmoke; text-decoration: none;" class="btn btn-success"
            @click="$store.state.loginpopmini = true">ورود /
            ثبت نام</a>
        </li>
        <li v-else style="" class="lil"><a style="font-size: 12px!important; color: whitesmoke; text-decoration: none;"
            class="btn btn-success" href="/dashboard">داشبورد</a>
        </li>
      </ul>
    </nav>

  </div><br><br><br><br><br><br><br>
  <Vcode successText="باموفقیت انجام شد" sliderText="Slide" :show="isshowl" @success="login()" @close="onClose" />
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
          const toPath = this.$route.go || '/dashboard'
          axios.defaults.headers.common['Authorization'] = "Token " + token
          setTimeout(() => {
            this.vorood()
          }, 500);

          this.$router.push(toPath)
          this.isshowl = false

        }

        ).catch(data => {
          this.isshowl = false
          this.myerror = 'نام کاربری یا کلمه عبور درست نیست'
          setTimeout(() => {
            this.myerror = ''
          }, 2000);
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
.lil {
  position: absolute;
  top: 25px;

  left: 5px
}

.lir {
  float: right;
  margin: 18px 15px
}

.lil a {
  font-size: 24px;
}

.lir a {
  font-size: 24px;
}

.third {
  display: flex;
  width: 32%;
  margin: 0.5%;
  border-radius: 2%;
  float: right;
  text-align: center
}

.mob {
  display: none;
}

.nmob {
  display: block;
}

.second {
  width: 43%;
  margin: .5%;
  float: right;
}

@media only screen and (max-width: 1023px) {

  .second {
    width: 93%;
    margin: .5%;
    float: right;
  }

  .lil a {
    font-size: 14px;
    text-decoration: none;
    color: smokewhite
  }

  .lir a {
    font-size: 14px;
    text-decoration: none;
    color: smokewhite
  }

  .lil {
    position: absolute;
    top: 25px;

    left: 5px
  }

  .lir {
    float: right;
    margin: 25px 5px
  }

}

@media only screen and (max-width: 767px) {
  .mob {
    display: block;
  }

  .nmob {
    display: none;
  }

  .wals {
    width: 94%;
    float: left;
    margin: 3%;
  }

  .third {
    display: flex;
    width: 99%;
    margin: 0.5%;
    border-radius: 2%;
    float: right;
    text-align: center
  }

}
</style>
