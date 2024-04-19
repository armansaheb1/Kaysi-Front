<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          پروفایل
        </CCardHeader>
        <CCardBody>
          <div>
            نام <input class="form-control" readonly style="color: black" v-model="user.name">
            نام خانوادگی <input class="form-control" readonly style="color: black" v-model="user.lastname">
            نام کاربری <input class="form-control" readonly style="color: black" v-model="user.username">
            تلفن <input class="form-control" readonly style="color: black" v-model="user.mobile">
            ایمیل <input class="form-control" readonly style="color: black" v-model="user.email">







          </div>
        </CCardBody>
      </CCard><br>
      <CCard>
        <CCardHeader>
          تغییر کلمه عبور
        </CCardHeader>
        <CCardBody>

          <div class="autoplay">
            کلمه عبور قبلی <input class="form-control" type="password" v-model="opassword">
            کلمه عبور جدید <input class="form-control" type="password" v-model="password">
            تکرار کلمه عبور <input class="form-control" type="password" v-model="repassword">
            <br>
            <a @click="submit()" class="btn btn-success">تغییر رمز</a>

          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile Page',
  props: {
    msg: String,
  },
  data: () => ({
    showModal: [],
    user: '',
    password: '',
    opassword: '',
    repassword: ''
  }),
  mounted() {
    this.get_user()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_user() {
      await axios
        .get(`user`)
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
    },
    async submit() {
      await axios
        .post(`changepass`, {
          password: this.password,
          opassword: this.opassword,
          repassword: this.repassword
        })
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerbg-dark {
  background-color: #0B0E11;
  color: white
}

.bannerbg-light {
  color: black
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.banner {
  width: 100%;
  height: 440px;
  background: url('https://static.vecteezy.com/system/resources/thumbnails/002/021/615/original/blockchain-network-concept-free-video.jpg');
  background-size: 100%;
}

.b-back {
  width: 70%;
  right: 15%
}

.mobile {
  display: block;
}

.nmobile {
  display: none;
}

@media only screen and (max-width: 700px) {
  .b-back {
    width: 100%;
    right: 0
  }

  .mobile {
    display: none;
  }

  .nmobile {
    display: block;
  }
}
</style>
<style></style>