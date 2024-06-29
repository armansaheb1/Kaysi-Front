<template>
  <Vcode successText="باموفقیت انجام شد" sliderText="Slide" :show="isShowl" @success="register()" @close="onClose" />
  <div class="bg-body-tertiary min-vh-100  align-items-center"
    style="width: 100%;padding-top: 90px;overflow-y: auto; overflow-x: hidden;max-height: 350px; background: url(/regback.png);background-size: 100% 100%;">



    <CRow class="justify-content-center" style="overflow: auto;">
      <CCol :md="9" :lg="7" :xl="6">
        <CCard class="mx-4">
          <CCardBody class="p-4">
            <!-- <button @click="$store.state.registerpop = false" style="float:left;color: white;  border-radius: 50%"
              class="btn btn-secondary">-</button> -->
            <div style="margin-top: -10px;" v-if="this.myerror" class="alert alert-danger">
              {{ myerror }}
            </div>
            <form @submit.prevent="isShowl = true">
              <h3>ثبت نام </h3>
              <CInputGroup class=" mb-3">
                <CInputGroupText>
                  <CIcon icon="cil-user" />
                </CInputGroupText>
                <input class="form-control" required v-model="username" placeholder="نام کاربری"
                  autocomplete="username" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <CIcon icon="cil-user" />
                </CInputGroupText>
                <input class="form-control" required v-model="first_name" placeholder="نام" autocomplete="email" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <CIcon icon="cil-user" class="fa-regular fa-phone " />
                </CInputGroupText>
                <input class="form-control" required v-model="last_name" placeholder="نام خانوادگی"
                  autocomplete="lastname" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <svg style="width: 16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="var(--ci-primary-color, currentColor)"
                      d="M380,16H132a32.036,32.036,0,0,0-32,32V464a32.036,32.036,0,0,0,32,32H380a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,380,16Zm0,32V80H132V48Zm0,64,.011,224H132V112Zm0,352H132V368H380.016l0,96Z"
                      class="ci-primary" />
                    <rect width="32" height="32" x="240" y="400" fill="var(--ci-primary-color, currentColor)"
                      class="ci-primary" />
                  </svg>

                </CInputGroupText>
                <input class="form-control" required v-model="mobile" placeholder="موبایل" autocomplete="email" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <CIcon icon="cil-envelope-closed" />
                </CInputGroupText>
                <input class="form-control" required v-model="email" placeholder="ایمیل" autocomplete="email" />
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <CIcon icon="cil-lock-locked" />
                </CInputGroupText>
                <input class="form-control" required v-model="password" type="password" placeholder="کلمه عبور"
                  autocomplete="new-password" />
              </CInputGroup>
              <CInputGroup class="mb-4">
                <CInputGroupText>
                  <CIcon icon="cil-lock-locked" />
                </CInputGroupText>
                <input class="form-control" required v-model="repassword" type="password" placeholder="تکرار کلمه غبور"
                  autocomplete="new-password" />
              </CInputGroup>
              <div class="d-grid">
                <button type="submit" class="btn btn-success">ساخت حساب کاربری</button>

                <br>
                <a style="color: blue; cursor: pointer" @click="$store.state.registerpop = false;"> بازکشت به صفحه
                  ورود</a>
              </div>
            </form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from 'axios'
import { Logger } from 'sass';
import Vcode from "vue3-puzzle-vcode";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  components: {
    Vcode
  },
  data() {
    return {
      isShowl: false,
      myerror: '',
      email: ''
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
            mobile: this.mobile,
            email: this.email
          })
          .then(response => {
            this.$store.state.registerpop = false

          }

          ).catch(data => {
            this.isShowl = false;
            console.log(data.response.data)
            for (var [key, value] of Object.entries(data.response.data)) {
              if (key === 'password')
                this.myerror = this.myerror + 'پسورد باید بیش از ۸ کاراکتر دارای عدد و حروف باشد و شبیه به نام کاربری نباشد' + '\n'

            }
            if (key === 'username') {
              this.myerror = this.myerror + 'نام کاربری قبلا ثبت شده است' + '\n'

            }
            if (key === 'email') {
              this.myerror = this.myerror + 'فرمت ایمیل غلط است ' + '\n'

            }
            if (key === 'mobile') {
              this.myerror = this.myerror + 'فرمت موبایل غلط است ' + '\n'

            }
            setTimeout(() => {
              this.myerror = ''
            }, 3000);
          })
      } else {
        this.myerror = ' پسورد با تکرار یکی نیست'
        this.isShowl = false
      }
    }
  }
}

</script>
