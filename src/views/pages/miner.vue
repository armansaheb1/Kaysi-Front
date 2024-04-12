<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <input @input="search()" v-model="searchtxt" type="text" class="form-control" placeholder="... جستوجو"
        style="text-align: right;" name="" id=""><br>

      <label for="" style="text-align: right;width: 100%;">از این قسمت ارز مورد نظر را انتخاب کنید</label>
      <select v-model="cur" style="text-align: center;" @change="get_miners()" name="" class="form-control" id="">
        <option v-for="item in curs" v-bind:key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <br>
      <CCard>
        <CCardHeader>
          اجاره ماینر
        </CCardHeader>
        <CCardBody>
          <CCard v-for="item in miners" v-bind:key="item" style="margin-bottom: 15px" class="third">
            <CCardHeader>
              {{ item.title }}
              <img :src="item.get_cur_pic" alt="" style="position:relative; top: 5px; z-index: 10;width: 10%">
            </CCardHeader>
            <CCardBody>

              <img :src="item.get_pic" style="width: 50%; margin: 2.5% 25%;" alt="">

            </CCardBody>

            <CCardFooter style="direction: rtl;text-align: justify; font-size: 14px;">
              {{ item.des }}
              <br><br>

            </CCardFooter>

            <CCardFooter>
              <p style="direction: rtl;text-align: right;">
                دوره اجاره : {{ item.period }} روز
                <br>
                هزینه اجاره ماهیانه : {{ item.price }}<a style="font: 10px arial;margin-left: 5px;">USDT</a>
                <br>
                هش ریت : {{ item.rate }}<a style="font: 10px arial;margin-left: 5px;">Th/s</a>
                <br>
                میزان سود ماهیانه : {{ item.profit }}<a style="font: 10px arial;margin-left: 5px;">{{ item.get_cur
                  }}</a>
              </p>
              <button @click="rent(item.id)" class="btn btn-primary form-control">اجاره کنید</button>
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
    curs: []

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
    async get_miners() {
      await axios
        .get(`miners/${this.cur}`)
        .then(response => response.data)
        .then(response => {
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
          this.cur = response[0]
          this.get_miners()
        })
    },
    async rent(id) {
      await axios
        .post(`rentminer`, { miner: id })
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
    float: left;
    margin: 25px 5px
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
