<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CFormInput @input="search()" v-model="searchtxt" placeholder="Search..." style="text-align: center;">
      </CFormInput>
      <br>
      <CCard>
        <CCardHeader>
          تاریخچه تراکنش ها

        </CCardHeader>
        <CCardBody>
          <table class="table" style="margin: 0; text-align: center;">
            <thead>
              <tr>
                <th>#</th>
                <th scope="col">نوع ارز</th>
                <th scope="col">مبلغ</th>
                <th scope="col">نوع تراکنش</th>
                <th scope="col">زمان تراکنش </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in transactions" v-bind:key="item">
                <th>{{ item[5] }}</th>
                <th scope="col"><img :src="item[0]" style="height: 40px;" alt=""></th>
                <th scope="col">{{ item[1] }}</th>
                <th scope="col">{{ item[2] }}</th>
                <th scope="col" :style="`color: ${item[4]}`">{{ item[3] }} </th>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard><br>

    </CCol>
  </CRow>
</template>

<script>

import { CFormInput } from '@coreui/vue';
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
    transactionsback: [],
    currency: '',
    searchtxt: '',
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
          this.transactionsback = response
        })
    },
    search() {
      setTimeout(() => {
        this.transactions = []
        for (var item of this.transactionsback) {
          if (item[5].includes(this.searchtxt)) {
            this.transactions.push(item)
          }
        }
      }, 100);
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