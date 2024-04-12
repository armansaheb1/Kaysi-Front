<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard v-if="balances > 0">
        <CCardHeader>
          موجودی در یک نگاه

        </CCardHeader>
        <CCardBody style="background-color: rgba(255,255,255,0.15);">
          <GChart style="float: left;" type="PieChart" :data="balancees" :options="{
            title: 'موجودی دلاری',
            pieHole: 0.3,
            width: width * .85,
            height: width / 4,
            textStyle: { color: '#FFF' },
            backgroundColor: 'transparent',
          }" />
          <h4 style="float: left; width: 40%">
            مجموع موجودی دلاری: {{ balances.toFixed(2) }}
          </h4>
        </CCardBody>
      </CCard><br><br>
      <CCard>
        <CCardHeader>
          موجودی حساب ها

        </CCardHeader>
        <div class="autoplay" style="width: 90%;margin: auto;height:auto;overflow-y:hidden">
          <div>
            <table style="direction: rtl; " class="table">
              <thead v-if="!mob">
                <tr>
                  <th class="col-1">ارز</th>
                  <th class="col-2"></th>
                  <th class="col-2" style="text-align: center;">قیمت</th>
                  <th class="col-2" style="text-align: center;">موجودی</th>
                  <th class="col-5" style="text-align: left;">عملیات</th>
                </tr>
              </thead>
              <thead v-else>

                <tr>
                  <th style="width: 25%">ارز</th>
                  <th style="width: 25%"></th>
                  <th style="width: 50%; text-align: center;">موجودی</th>
                </tr>
              </thead>
              <tbody v-if="!mob" v-for="item in wallets " v-bind:key="item">
                <tr v-if="parseFloat(item[1])">
                  <td class="col-1" style="text-align: right;height: 60px"><img
                      style="position:relative;height: 100%; float:right; aspect-ratio:1/1; margin-top: 5%"
                      :src="item[0]">

                  </td>
                  <td>
                    <h6
                      style="width: 100%;float:right;margin: auto; text-align: right;font-family:'arial';margin-top: 5px">
                      {{
                        item[2] }}
                    </h6><br>
                    <h6 style="font-size: 14px;width: 100%;float:right;margin: auto; text-align: right ">{{
                      item[4] }}

                    </h6>
                  </td>

                  <td class="notmob" v-if="item[5].toFixed(10) < 0.000001" style="text-align: center;padding-top: 25px">
                    {{ item[5].toFixed(10) }}
                  </td>
                  <td class="notmob" v-else-if="item[5] > 100" style="text-align: center;padding-top: 25px">
                    {{ parseInt(item[5]) }}
                  </td>
                  <td class="notmob" v-else style="text-align: center;padding-top: 25px">
                    {{ item[5].toFixed(6) }}
                  </td>



                  <td class="col-3" style="text-align: center;">
                    <h6 class="notmob" v-if="item[1].toFixed(10) < 0.0000001"
                      style="text-align: center;padding-top: 25px">
                      {{ item[1].toFixed(10) }}
                    </h6>
                    <h6 class="notmob" v-else-if="item[1] > 100" style="text-align: center;padding-top: 25px">
                      {{ parseInt(item[1]) }}
                    </h6>
                    <h6 class="notmob" v-else style="text-align: center;padding-top: 25px">
                      {{ item[1].toFixed(6) }}
                    </h6>
                    <h6 style="margin: auto; text-align: center;font-family:'calibri';">
                      {{ (parseFloat(item[1]) * parseFloat(item[5])).toFixed(6) }}
                    </h6>
                    <br>
                  </td>
                  <td class="col-6 notmob" style="text-align: left;">
                    <a style="margin: 5px" :href="`/charge/${item[3]}`" class="btn btn-success"> واریز</a>
                    <a style="margin: 5px" :href="`/withdraw/${item[3]}`" class="btn btn-danger"> برداشت</a>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="!mob" v-for="item in wallets " v-bind:key="item">
                <tr v-if="!parseFloat(item[1])">
                  <td class="col-1" style="text-align: right;height: 60px"><img
                      style="position:relative;height: 100%; float:right; aspect-ratio:1/1; margin-top: 5%"
                      :src="item[0]">

                  </td>
                  <td>
                    <h6
                      style="width: 100%;float:right;margin: auto; text-align: right;font-family:'arial';margin-top: 5px">
                      {{
                        item[2] }}
                    </h6><br>
                    <h6 style="font-size: 14px;width: 100%;float:right;margin: auto; text-align: right ">{{
                      item[4] }}

                    </h6>
                  </td>

                  <td class="notmob" v-if="item[5] < 0.000001" style="text-align: center;padding-top: 25px">
                    {{ item[5].toFixed(10) }}
                  </td>
                  <td class="notmob" v-else-if="item[5] > 100" style="text-align: center;padding-top: 25px">
                    {{ parseInt(item[5]) }}
                  </td>
                  <td class="notmob" v-else style="text-align: center;padding-top: 25px">
                    {{ item[5].toFixed(6) }}
                  </td>


                  <td class="col-3" style="text-align: center;">
                    <h6 style="margin: auto; margin-top: 5px;text-align: center;font-family:'calibri';">
                      {{ item[1] }}
                    </h6>
                    <h6 style="margin: auto; text-align: center;font-family:'calibri';">
                      {{ parseFloat(item[1]) * parseFloat(item[5]) }}
                    </h6>
                    <br>
                  </td>
                  <td class="col-6 notmob" style="text-align: left;">
                    <a style="margin: 5px" :href="`/charge/${item[3]}`" class="btn btn-success"> واریز</a>
                    <a style="margin: 5px" :href="`/withdraw/${item[3]}`" class="btn btn-danger"> برداشت</a>
                  </td>
                </tr>
              </tbody>












              <tbody v-if="mob" v-for="item in wallets " v-bind:key="item">
                <tr v-if="parseFloat(item[1])">
                  <td style="text-align: right;height: 60px; width: 25%">
                    <a :href="`/cw/${item[3]}`">
                      <img style="position:relative;height: 100%; float:right; aspect-ratio:1/1; margin-top: 5%"
                        :src="item[0]">
                    </a>
                  </td>
                  <td class="col-2" style="width: 25%">
                    <a :href="`/cw/${item[3]}`">
                      <h6
                        style="width: 100%;float:right;margin: auto; text-align: right;font-family:'arial';margin-top: 5px">
                        {{
                          item[2] }}
                      </h6><br>
                      <h6 style="font-size: 14px;width: 100%;float:right;margin: auto; text-align: right ">
                        {{
                          item[4] }}

                      </h6>
                    </a>
                  </td>

                  <td v-if="mob" style="text-align: center; width: 50%">
                    <a :href="`/cw/${item[3]}`">
                      <h6 style="margin: auto; margin-top: 5px;text-align: center;font-family:'calibri';">
                        {{ item[1] }}
                      </h6>
                      <h6 style="margin: auto; text-align: center;font-family:'calibri';">
                        {{ (parseFloat(item[1]) * parseFloat(item[5])).toFixed(6) }}
                      </h6>
                      <br>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="mob" v-for="item in wallets " v-bind:key="item">
                <tr v-if="!parseFloat(item[1])">
                  <td class="col-1" style="text-align: right;height: 60px">
                    <a :href="`/cw/${item[3]}`">
                      <img style="position:relative;height: 100%; float:right; aspect-ratio:1/1; margin-top: 5%"
                        :src="item[0]"></a>

                  </td>
                  <td class="col-2s">
                    <a :href="`/cw/${item[3]}`">
                      <h6
                        style="width: 100%;float:right;margin: auto; text-align: right;font-family:'arial';margin-top: 5px">
                        {{
                          item[2] }}
                      </h6><br>
                      <h6 style="font-size: 14px;width: 100%;float:right;margin: auto; text-align: right ">
                        {{
                          item[4] }}

                      </h6>
                    </a>
                  </td>


                  <td class="col-2" style="text-align: center;">
                    <a :href="`/cw/${item[3]}`">
                      <h6 style="margin: auto; margin-top: 5px;text-align: center;font-family:'calibri';">
                        {{ item[1] }}
                      </h6>
                      <h6 style="margin: auto; text-align: center;font-family:'calibri';">
                        {{ parseFloat(item[1]) * parseFloat(item[5]) }}
                      </h6>
                      <br>
                    </a>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CCard><br>

    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

import { GChart } from 'vue-google-charts'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  props: {
    msg: String,
  },
  data: () => ({
    showModal: [],
    user: '',
    wallets: [],
    balancees: [['ارز', 'موجودی دلاری']],
    width: 0,
    balances: 0,
    mob: false
  }),
  components: {
    GChart
  },
  mounted() {
    this.get_user()
    this.get_wallets()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_user() {
      this.width = window.innerWidth
      if (window.innerWidth < 1024) {
        this.mob = true
      } else {
        this.mob = false
      }
      await axios
        .get(`user`)
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
    },
    async get_wallets() {
      await axios
        .get(`wallets`)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.wallets = response
          this.balances = 0
          for (var item of response) {
            if (item[1]) {
              this.balancees.push([item[2], parseFloat(item[1]) * parseFloat(item[5])])
              this.balances = this.balances + parseFloat(item[1]) * parseFloat(item[5])
            }

          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: var(--cui-card-cap-color)
}

.btn {
  color: white !important
}

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
  width: 27%;
  float: left;
  margin: 3%
}

.mob {
  display: none;
}

@media only screen and (max-width: 700px) {
  .wals {
    width: 44%;
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

  .notmob {
    display: none;
  }

  .mob {
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