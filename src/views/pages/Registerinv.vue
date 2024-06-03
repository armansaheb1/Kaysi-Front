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

  </div>
  <Vcode :show="isShowl" @success="register()" @close="onClose" />
  <div class="bg-body-tertiary min-vh-100  align-items-center"
    style="padding-top: 150px;width: 100%;padding-top: 150px;overflow-y: auto; overflow-x: hidden;max-height: 350px; background: url(/regback.png);background-size: 100% 100%;">



    <CRow class="justify-content-center" style="overflow: auto;">
      <CCol :md="9" :lg="7" :xl="6">
        <CCard class="mx-4">
          <CCardBody class="p-4">
            <!-- <button @click="$store.state.registerpop = false" style="float:left;color: white;  border-radius: 50%"
              class="btn btn-secondary">-</button> -->
            <div style="margin-top: -10px;" v-if="this.myerror" class="alert alert-danger">
              {{ myerror }}
            </div>
            <div style="margin-top: -10px;" v-if="this.mygoal" class="alert alert-success">
              {{ mygoal }}
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
      email: '',
      mygoal: ''
    }
  },
  methods: {
    async inv() {
      var key = this.$route.params.key
      if (this.password == this.repassword) {
        await axios
          .post('inv', {
            username: this.username.toLowerCase(),
            key: key
          })
      }
    },

    async register() {
      var key = this.$route.params.key
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
          .then(() => {
            this.isShowl = false
            this.inv()
            this.mygoal = 'با موفقیت ثبت نام کردید به صفحه اصلی منتقل خواهید شد'
            setTimeout(() => {
              const toPath = this.$route.go || '/'
              this.$router.push(toPath)
            }, 2000);


          }

          ).catch(data => {
            this.isShowl = false

            this.myerror = 'کلمه عبور پیچیده تری انتخاب کنید'
          })
      } else {
        this.myerror = ' پسورد با تکرار یکی نیست'
        this.isShow = false
      }
    }
  }
}

</script>
<style>
.lil {
  float: left;
  margin: 18px 15px
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
    float: left;
    margin: 25px 5px
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
