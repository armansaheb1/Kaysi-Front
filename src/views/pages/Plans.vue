<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          خرید پلن جدید

        </CCardHeader>
        <CCardBody>
          <img v-if="pic" :src="pic" alt="" style="width: 16%; margin: 0 42%;">
          <br>
          <br>
          <label for="">نوع ارز</label>
          <select @change="get_plans(currency)" v-model="currency" class="form-control">
            <option v-for="item in currencies" v-bind:key="item" :value="item.id">
              {{ item.name }}
            </option>
          </select>
          <br>
          <label for="">پلن</label>
          <select v-if="currency" v-model="plan" class="form-control">
            <option v-for="item in plans" v-bind:key="item" :value="item.id">
              {{ item.title }}
            </option>
          </select><br>
          <label for="">مبلغ</label>
          <input class="form-control" type="text" name="" id=""><br><br>

          <button class="btn btn-success"> خرید</button>

        </CCardBody>
      </CCard><br>
      <CCard>
        <CCardHeader>
          پلن های فعال

        </CCardHeader>
        <CCardBody>

        </CCardBody>
      </CCard>
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
    currencies: [],
    currency: '',
    plans: [],
    plan: '',
    pic: ''
  }),
  components: {
  },
  mounted() {
    this.get_currencies()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_currencies() {
      await axios
        .get(`currencies`)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.currencies = response
          this.currency = response[0].id
          this.get_plans()
        })
    },
    async get_image(id) {
      await axios
        .get(`currencies/${id}`)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.pic = response.get_image
        })
    },
    async get_plans() {
      await axios
        .get(`plan-by-currency/${this.currency}`)
        .then(response => response.data)
        .then(response => {
          this.plans = response
          this.get_image(this.currency)
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