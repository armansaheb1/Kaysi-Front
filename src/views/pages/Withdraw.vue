<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCardBody>
        <div class="autoplay" style="width: 100%;margin: auto;height:auto;overflow-y:hidden">
          <div v-for="item in currency " v-bind:key="item" class="card wals" style="">
            <div class="card-header"><img
                style="position:relative;width: 26%; margin: 0 37%; margin-top: 0px;float:none; aspect-ratio: 1/1"
                :src="item[0]">
            </div>
            <div class=" card-body">


              <form @submit.prevent="submitwith()">

                <a style="float: right;text-align: right;">موجودی فعلی:
                  <a v-if="balance < 0.000001">
                    {{ balance.toFixed(10) }}
                  </a>
                  <a v-else-if="balance > 100">
                    {{ parseInt(balance) }}
                  </a>
                  <a v-else>
                    {{ balance.toFixed(6) }}
                  </a></a>
                <input class="form-control" type="text" v-model="amount2" placeholder="مبلغ"><br>
                <input class="form-control" type="text" v-model="link2" placeholder="آدرس ولت"><br>
                <button class="btn btn-success  form-control" id="amreqn" style=" font-family: 'Yekan'!important;">
                  ثبت
                  برداشت</button>


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
    balance: 0
  }),
  components: {
  },
  mounted() {
    this.get_user()
    this.get_currency()
    this.get_wallet()
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
        .post(`wallets/${id}`)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.currency = response
        })
    },
    async submitwith() {
      var id = this.$route.params.id
      await axios
        .post(`askamountreq`, { cur: id, link: this.link2, amount: this.amount2 })
        .then(response => response.data)
        .then(() => {
          const toPath = this.$route.go || '/balances'
          this.$router.push(toPath)
        })
    },
    async get_wallet() {
      var id = this.$route.params.id
      await axios
        .post(`wallets/${id}`)
        .then(response => response.data)
        .then(response => {
          this.balance = [response][0][0][1]
        })
    },
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