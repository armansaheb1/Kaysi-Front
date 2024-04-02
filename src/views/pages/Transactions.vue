<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          تاریخچه تراکنش ها

        </CCardHeader>
        <CCardBody>
          <table class="table" style="margin: 0">
            <thead>
              <tr>
                <th scope="col">نوع ارز</th>
                <th scope="col">مبلغ</th>
                <th scope="col">نوع تراکنش</th>
                <th scope="col">زمان تراکنش </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in transactions" v-bind:key="item">
                <th scope="col">{{ item[0] }}</th>
                <th scope="col">{{ item[1] }}</th>
                <th scope="col">{{ item[2] }}</th>
                <th scope="col">{{ item[3] }} </th>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard><br>

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
    transactions: [],
    currency: '',
    plans: [],
    plan: '',
    pic: ''
  }),
  components: {},
  mounted() {
    this.get_transactions()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_transactions() {
      await axios
        .get(`transactions`)
        .then(response => response.data)
        .then(response => {
          this.transactions = response
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