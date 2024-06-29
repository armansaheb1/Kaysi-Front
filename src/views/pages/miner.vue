<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <input @input="search()" v-model="searchtxt" type="text" class="form-control" placeholder="... جستوجو"
        style="text-align: right;" name="" id=""><br>

      <select v-model="cur" style="text-align: center;" @change="get_miners()" name="" class="form-control" id="">
        <option :value="''">
          همه
        </option>
        <option v-for="item in curs" v-bind:key="item" :value="'/' + item">
          {{ item }}
        </option>
      </select>
      <br>
      <CCard>
        <CCardHeader>
          اجاره ماینر
        </CCardHeader>
        <CCardBody>
          <CCard
            :style="[dark ? { 'border-color': 'silver', 'background': 'black', 'color': 'white' } : { 'border-color': 'gold', 'background': 'white', 'color': 'black' }]"
            v-for="item in miners" v-bind:key="item" style="margin-bottom: 15px;border-radius: 10px;" class="third">
            <CCardHeader style="height: 60px;font-size: 14px;font-weight: bold;">
              {{ item.title }}
              <img :src="item.get_cur_pic" alt="" style="position:relative; top: 5px; z-index: 10;width: 10%">
            </CCardHeader>
            <CCardBody>
              <img :src="item.get_pic" style="width: 100px;height:100px; margin: 2.5% 25%;" alt="">

            </CCardBody>

            <CCardFooter
              style="direction: rtl;text-align: justify; font-size: 14px; height: 415px; text-overflow:ellipsis;overflow: hidden;">
              {{ item.des }}
              <br><br>

            </CCardFooter>

            <CCardFooter>
              <p style="direction: rtl;text-align: right;">
                دوره اجاره : {{ item.period }} روز
                <br>
                هزینه اجاره دوره : {{ item.price }}<a style="font: 10px arial;margin-left: 5px;">USDT</a>
                <br>
                هش ریت : {{ item.rate }}<a style="font: 10px arial;margin-left: 5px;">Th/s</a>
                <br>
                میزان سود دوره : {{ item.profit }}<a style="font: 10px arial;margin-left: 5px;">{{ item.get_cur
                  }}</a>
              </p>
              <input v-model="item.amount" type="number" placeholder="تعداد ماینر درخواستی" style="text-align: center;"
                class="form-control">
              <a style="font-size: 12px;font-weight: bold; float: right;"> پرداختی: {{ item.price * item.amount
                }} USDT</a><br>
              <a style="font-size: 12px;font-weight: bold; float: right;"> موجودی: {{ balance }} USDT</a>
              <br>
              <button @click="rent(item.id, item.amount)" class="btn btn-primary form-control">اجاره کنید</button>
              <br><br>
            </CCardFooter>
          </CCard>
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
    miners: [],
    minersback: [],
    searchtxt: '',
    cur: '',
    curs: [],
    balance: 0,
    dark: false,

  }),
  components: {
  },
  mounted() {
    this.get_currencies()
    this.get_wal()
    this.getloc()

  },
  methods: {
    getloc() {
      this.dark = localStorage.getItem('coreui-free-vue-admin-template-theme') == 'light'
      setTimeout(() => {
        this.getloc()
      }, 1000);
    },
    login() {
      this.$store.state.showloginindex = true
    },
    async get_wal() {
      await axios
        .post(`wallets/6`)
        .then(response => response.data)
        .then(response => {
          this.balance = response[0][1]
        })
    },
    async get_miners() {
      await axios
        .get(`miners${this.cur}`)
        .then(response => response.data)
        .then(response => {
          for (var item of response) {
            item.amount = ''
          }
          this.miners = response
          this.minersback = response
        })
    },
    async get_currencies() {
      await axios
        .get(`minerscurrencies`)
        .then(response => response.data)
        .then(response => {
          this.curs = response
          this.cur = ''
          this.get_miners()
        })
    },
    async rent(id, amount) {
      await axios
        .post(`rentminers`, { miner: id, amount: amount })
        .then(response => response.data)
        .then(() => {
          const toPath = this.$route.go || '/miners'
          this.$router.push(toPath)
        }).catch(data => {
          console.log(data)
          this.$swal.fire('', data.response.data, "error");
          this.merrors = data.response.data
        })
    },
    filter() {
      this.miners = []
      for (var item of this.minersback) {
        if (item.title.toLowerCase().includes(this.searchtxt.toLowerCase()) || item.get_cur.toLowerCase().includes(this.searchtxt.toLowerCase())) {
          this.miners.push(item)
        }
      }
    },
    search() {
      this.miners = []
      for (var item of this.minersback) {
        if (item.title.toLowerCase().includes(this.searchtxt.toLowerCase()) || item.get_cur.toLowerCase().includes(this.searchtxt.toLowerCase())) {
          this.miners.push(item)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

@media only screen and (max-width: 1023px) {

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
