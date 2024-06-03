<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            موجودی در یک نگاه

          </CCardHeader>

          <CCardBody style="background-color: rgba(255,255,255,0.15);text-align: right;">
            <CChartDoughnut style="width: 30%;float: left;" :data="balancees" />
            <!-- <GChart style="float: left;" type="PieChart" :data="balancees" :options="{
            title: 'موجودی دلاری',
            pieHole: 0.3,
            width: width * .5,
            height: width / 4,
            textStyle: { color: '#FFF' },
            backgroundColor: 'transparent',
          }" /> -->
            <h6 style="float: right; width: 50%">
              مجموع موجودی دلاری:<br><br> {{ balances.toFixed(2) }}
            </h6>
          </CCardBody>

        </CCard><br>

        <CCard>
          <CCardHeader>
            لینک دعوت دوستان
          </CCardHeader>

          <CCardBody style="background-color: rgba(255,255,255,0.15);text-align: right;">
            <CInputGroup class="mb-3">
              <CInputGroupText @click="copy()" class="copy-btn">
                کپی
              </CInputGroupText>
              <input style="text-align: left;" class="form-control" id="myInput" required v-model="ref"
                placeholder="موبایل" autocomplete="email" />
            </CInputGroup>

          </CCardBody>
        </CCard>

        <br>
        <CCard>
          <CCardHeader>
            زیر مجموعه ها
          </CCardHeader>
          <CCardHeader style="text-align: center;background-color: beige;">
            سطح ۱
          </CCardHeader>

          <CCardBody style="background-color: rgba(255,255,255,0.15);text-align: right;">
            <CCard style="width: 24%;float: right;margin: .5%">

            </CCard>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

  </div>
</template>

<script>
import axios from 'axios';
import { CChartDoughnut } from '@coreui/vue-chartjs'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: {
    CChartDoughnut
  },
  mounted() {
    this.get_wallets()
    this.get_user()
    this.get_invs()
  },
  data: () => ({
    showModal: [],
    ref: '',
    wallets: [],
    walletsback: [],
    balancees: {
      labels: [],
      datasets: [
        {
          backgroundColor: [],
          data: [],
        },]
    },
    width: 0,
    balances: 0,
    mob: false,
    searchtxt: '',
    invs: []
  }),
  methods: {
    async get_invs() {

      await axios
        .post(`inv`).then(response => response.data)
        .then(response => {
          this.invs = response
        })
    },
    async get_user() {

      await axios
        .get(`user`).then(response => response.data)
        .then(response => {
          this.ref = 'ramabit.com/register/' + response.ref
        })
    },
    copy() {
      var copyText = document.getElementById("myInput");

      // Select the text field
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);

      // Alert the copied text
      document.querySelector('.copy-btn').innerHTML = document.querySelector('.copy-btn').innerHTML.replace('کپی', 'کپی شد')
      setTimeout(() => {
        document.querySelector('.copy-btn').innerHTML = document.querySelector('.copy-btn').innerHTML.replace('کپی شد', 'کپی')
      }, 1000);
    },

    async get_wallets() {
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      await axios
        .get(`wallets`)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.walletsback = response
          this.wallets = response
          this.balances = 0
          this.balancees = {
            labels: [],
            datasets: [
              {
                backgroundColor: [],
                data: [],
              },]
          }
          for (var item of response) {
            if (item[1]) {
              this.balancees.labels.push(item[2])
              this.balancees.datasets[0].data.push(parseInt(parseFloat(item[1]) * parseFloat(item[5])))
              this.balancees.datasets[0].backgroundColor.push(getRandomColor())

              this.balances = this.balances + (parseFloat(item[1]) * parseFloat(item[5]))
            }
          }

        })
    },
  }
}
</script>
