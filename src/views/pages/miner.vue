<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <input @input="search()" v-model="searchtxt" type="text" class="form-control" placeholder="... جستوجو"
        style="text-align: right;" name="" id=""><br>
      <CCard>
        <CCardHeader>
          خرید پلن جدید

        </CCardHeader>
        <CCardBody>
          <CCard v-for="item in miners" v-bind:key="item" class="third">
            <CCardHeader>
              {{ item.title }}
              <img :src="item.get_cur_pic" alt="" style="position:relative; top: 5px; z-index: 10;width: 10%">
            </CCardHeader>
            <CCardBody>

              <img :src="item.get_pic" style="width: 90%; margin: 5%;" alt="">

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
              <button class="btn btn-success form-control">اجاره کنید</button>
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
    searchtxt: ''

  }),
  components: {
  },
  mounted() {
    this.get_miners()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_miners() {
      await axios
        .get(`miners`)
        .then(response => response.data)
        .then(response => {
          this.miners = response
          this.minersback = response
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
