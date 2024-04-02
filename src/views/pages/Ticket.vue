<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          برداشت از حساب ها

        </CCardHeader>
        <CCardBody>
          <div class="autoplay" style="width: 100%;margin: auto;height:auto;overflow-y:hidden">
            <div v-for="item in  currency " v-bind:key="item" class="card wals" style=""
              :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
              <div class="card-header"><img
                  style="position:relative;width: 30%; margin: 0 35%; margin-top: 0px;float:none; aspect-ratio: 1/1"
                  :src="item[0]">
              </div>
              <div class=" card-body">


                <form action="admindecrease" method="POST">
                  <h5 style="text-align: center;">موجودی : {{ item[1] }}</h5>
                  <input class="form-control" type="text" name="" id="" placeholder="مبلغ"><br>
                  <input class="form-control" type="text" name="" id="" placeholder="آدرس ولت"><br>
                  <button class="btn btn-success  form-control" id="amreqn" style=" font-family: 'Yekan'!important;">
                    ثبت
                    واریز</button>


                </form>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard><br>

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
    user: ''
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