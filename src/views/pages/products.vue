<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          پلن های فعال

        </CCardHeader>
        <CCardBody>
          <table style="direction: rtl; text-align: center;" class="table table-responsive">
            <thead v-if="!mob">
              <tr>
                <th>ماینر</th>
                <th>مبلغ</th>
                <th>زمان ثبت</th>
                <th>زمان پایان</th>
                <th>دوره سود</th>
                <th>پلن</th>
                <th>درصد سود</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody v-if="!mob" v-for="item in plans " v-bind:key="item">
              <tr>
                <td style="height: 60px">
                  <img style="position:relative;height: 100%; float:right; aspect-ratio:1/1; margin-top: 5%"
                    :src="item.get_image">

                </td>
                <td style="height: 60px">
                  {{ item.miner.price }}

                </td>
                <td style="height: 60px">
                  {{ tojala(item.start_date) }}

                </td>
                <td style="height: 60px">
                  {{ tojala(new Date().setDate(new Date(item.start_date).getDate() + 30)) }}

                </td>
                <td>
                  {{ item.miner.period }}
                </td>
                <td>
                  {{ item.miner.title }}
                </td>
                <td>
                  {{ item.miner.profit }}
                </td>
                <td>
                  {{ parseFloat(item.paid).toFixed(6) }}{{ item.miner.currency.brand }}
                  <ProgressBar style="color: black!important"
                    :value="parseInt(parseFloat(item.paid) / parseFloat(item.miner.profit) * 100)" />
                </td>

              </tr>
            </tbody>












            <tbody v-if="mob" v-for="item in plans " v-bind:key="item">
              <tr style="border-color: transparent;">
                <td colspan="3" style=" text-align: center;width: 100%;"><img
                    style="position:relative;height: 100%; aspect-ratio:1/1; margin: auto;width: 15%;"
                    :src="item.get_image">

                </td>
              </tr>
              <tr style="border-color: transparent;">
                <td colspan="3" class="col-8">
                  {{ item.miner.title }}
                </td>
              </tr>
              <tr style="border-color: transparent;">

                <td colspan="5" style="height: 60px">
                  <table class="table">
                    <tr>
                      <td class="col-6" style="width: 50%;text-align: right;">مبلغ شروع</td>
                      <td class="col-6" style="width: 50%;text-align: left;">{{ item.miner.price }}</td>
                    </tr>

                    <tr>
                      <td class="col-6" style="width: 50%;text-align: right;">زمان شروع</td>
                      <td class="col-6" style="width: 50%;text-align: left;">{{
                        tojala(item.start_date) }}</td>
                    </tr>

                    <tr>
                      <td class="col-6" style="width: 50%;text-align: right;">زمان پایان</td>
                      <td class="col-6" style="width: 50%;text-align: left;">{{ tojala(new Date().setDate(new
                        Date(item.start_date).getDate() + 30)) }}</td>
                    </tr>

                    <tr>
                      <td class="col-6" style="width: 50%;text-align: right;">دوره</td>
                      <td class="col-6" style="width: 50%;text-align: left;">{{ item.miner.period }}</td>
                    </tr>

                    <tr>
                      <td class="col-6" style="width: 50%;text-align: right;">درصد سود</td>
                      <td class="col-6" style="width: 50%;text-align: left;">{{ item.miner.profit }}</td>
                    </tr>
                  </table>







                </td>

              </tr>
              <tr>
                <td>
                  {{ parseFloat(item.paid).toFixed(6) }}{{ item.miner.currency.brand }}
                  <ProgressBar style="color: black!important"
                    :value="parseInt(parseFloat(item.paid) / parseFloat(item.miner.profit) * 100)" />
                </td>
              </tr>
            </tbody>

          </table>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>

import axios from 'axios'
import moment from "moment-jalaali"
import ProgressBar from 'primevue/progressbar';

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
    pic: '',
    mob: false,
    merrors: '',
    value: 20
  }),
  components: {
    ProgressBar
  },
  mounted() {
    this.get_size()
    this.get_plans()
  },
  methods: {
    tojala(date) {
      return moment(new Date(date)).format('jYYYY/jM/jD HH:mm:ss')
    },
    login() {
      this.$store.state.showloginindex = true
    },
    get_size() {
      console.log('size')
      this.width = window.innerWidth
      if (window.innerWidth < 1024) {
        this.mob = true
      } else {
        this.mob = false
      }
      setTimeout(() => {
        this.get_size()
      }, 4000);
    },
    async get_plans() {

      await axios
        .get(`miner`)
        .then(response => response.data)
        .then(response => {
          this.plans = response
          setTimeout(() => {
            this.get_plans()
          }, 30000);
        })
    },
    async close(id = null) {
      await axios
        .post(`closeplan`, { bidid: id })
        .then(response => response.data)
        .then(response => {
          this.plans = response
        }).catch(data => {
          console.log(data)
          this.$swal.fire('', data.response.data, "error");
          this.merrors = data.response.data
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

.container {
  margin: 0
}

.p-progressbar .p-progressbar-label {
  color: black !important;
  text-align: center
}
</style>