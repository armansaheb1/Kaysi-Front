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
                <th>ارز</th>
                <th>مبلغ</th>
                <th>زمان ثبت</th>
                <th>دوره سود</th>
                <th>پلن</th>
                <th>درصد سود</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody v-if="!mob" v-for="item in plans " v-bind:key="item">
              <tr>
                <td style="height: 60px">
                  <img style="position:relative;height: 100%; float:right; aspect-ratio:1/1; margin-top: 5%"
                    :src="item.get_image">

                </td>
                <td style="height: 60px">
                  {{ item.deposit }}

                </td>
                <td style="height: 60px">
                  {{ item.date_field }}

                </td>
                <td>
                  {{ item.plan.period }}
                </td>
                <td>
                  {{ item.plan.title }}
                </td>
                <td>
                  {{ item.plan.percent }}
                </td>
                <td>
                  <button @click="close(item.id)" class="btn btn-danger">
                    بستن پلن
                  </button>
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
                  {{ item.plan.title }}
                </td>
              </tr>
              <tr style="border-color: transparent;">

                <td colspan="5" style="height: 60px">
                  <table class="table">
                    <tr>
                      <td style="text-align: right;">مبلغ شروع</td>
                      <td style="text-align: left;">{{ item.deposit }}</td>
                    </tr>


                    <tr>
                      <td style="text-align: right;">زمان شروع</td>
                      <td style="text-align: left;">{{ tojala(item.date_field) }}</td>
                    </tr>

                    <tr>
                      <td style="text-align: right;">دوره</td>
                      <td style="text-align: left;">{{ item.plan.period }}</td>
                    </tr>

                    <tr>
                      <td style="text-align: right;">درصد سود</td>
                      <td style="text-align: left;">{{ item.plan.percent }}</td>
                    </tr>
                  </table>







                </td>

              </tr>
              <tr>
                <td colspan="5">
                  <button @click="close(item.id)" class="btn btn-danger form-control">
                    بستن پلن
                  </button>
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
import moment from "moment-jalaali";

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
  }),
  components: {
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
        .get(`plan`)
        .then(response => response.data)
        .then(response => {
          this.plans = response
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