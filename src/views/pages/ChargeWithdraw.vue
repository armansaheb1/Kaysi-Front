<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <div v-for="item in  currency " v-bind:key="item">
        <img style="position:relative;width: 20%; margin: 0 40%; margin-top: 0px;float:left; aspect-ratio: 1/1;"
          :src="item.get_image">
      </div><br><br><br><br>


      <div class="autoplay" style="width: 100%;margin: auto;height:auto;overflow-y:hidden;">
        <div v-for="item in  currency " v-bind:key="item" class="card">
          <CCardHeader style="text-align: center;">
            <h4>واریز</h4>
          </CCardHeader>

          <CCardBody>



            <img style="position:relative;width: 30%; margin: 0 35% 5%; margin-top: 0px;float:left; aspect-ratio: 1/1;"
              :src="item.get_qr">
            <input type="text" name="" id="" class="form-control" :value="item.address"
              style="border-radius: 5px 5px 0 0;">
            <button class="btn btn-warning"
              style="width: 100%; margin: auto;border-radius:  0 0 5px 5px; font-family: 'Yekan'!important;">کپی</button><br>
            <form action="admindecrease" method="POST">
              <input class="form-control" type="text" name="" id="" placeholder="مبلغ"><br>
              <input class="form-control" type="text" name="" id="" placeholder="کد یا لینک پیگیری"><br>
              <button class="btn btn-success  form-control" id="amreqn" style=" font-family: 'Yekan'!important;">
                ثبت
                واریز</button><br><br>


            </form>
          </CCardBody>
        </div>
      </div>

    </CCol>
  </CRow>
  <br>
  <CRow>
    <CCol>
      <CCardBody>
        <div class="autoplay" style="width: 100%;margin: auto;height:auto;overflow-y:hidden">
          <div v-for="item in  currency2 " v-bind:key="item" class="card wals" style="">
            <div class="card-header" style="text-align: center;">
              <h4>برداشت</h4>
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

    </CCol>
  </CRow>
</template>

<script>

import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  props: {
    msg: String,
  },
  data: () => ({
    showModal: [],
    user: '',
    currency: [],
    currency2: []
  }),
  mounted() {
    this.get_user()
    this.get_currency()
    this.get_currency2()
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
    async get_currency() {
      var id = this.$route.params.id
      await axios

        .post(`currencies/${id}`)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.currency = [response]
        })
    },
    async get_currency2() {
      var id = this.$route.params.id
      await axios
        .post(`wallets/${id}`)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.currency2 = response
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

.wals {
  width: 80%;
  float: left;
  margin: 10%;
  margin-top: 0
}

@media only screen and (max-width: 700px) {
  .wals {
    width: 94%;
    float: left;
    margin: 3%;
  }

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

@media only screen and (max-width: 400px) {
  .wals {
    width: 94%;
    float: left;
    margin: 3%;
  }

}
</style>
<style></style>