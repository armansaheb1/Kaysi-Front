<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CRow>
    <CCol>
      <CCard>

        <div class="card-header">
          <h4 style="text-align: center;"> تایید هویت</h4>

        </div>
        <h5 style="color:red; text-align: center;margin : 25px 0 -5px 0">تایید این بخش فقط برای تراکنش ریالی اجباریست
        </h5>






        <div class="autoplay"
          style="width: 90%;margin: auto;height:auto;overflow-y:hidden;overflow-x:hidden ; padding-bottom:10px">
          <div
            style="text-align: center;width: 40%; margin-left: 5%;margin-right:5%; margin-top: 50px; padding: 20px;padding-top: 70px;border:1px solid #dcdcdc;border-radius: 10px;float:left">
            <h5>تایید تلفن همراه</h5>
            <form method="POST" action="verifymobile"> <input name="code" style="float: right;" class="form-control"
                type="number" required><label for="submit1"><br><button
                  class="btn btn-info">تایید</button><br><br></label>
              <input type="submit" hidden>
            </form>

            <a style="text-align: center; float: none; margin: 5%;color: black;" style:focus="border:none"
              href="verifymobile">
              <button id="mobilesendbtn" class="btn btn-info">ارسال کد</button>
            </a>
            <br><br><br><br>
          </div>
          <div
            style="text-align: center;width: 40%; margin-left: 5%;margin-right: 5%; margin-top: 50px; padding: 20px;padding-top: 70px;border:1px solid #dcdcdc;border-radius: 10px;float:left">
            <h5>تایید ایمیل</h5>
            <p :style="`color:${emailvc}`">{{ emailv }}</p>
            <form id="emailsend" method="POST" action="verifyemail"><input style="float: right;" class="form-control"
                name="code" type="number" required><label for="submit1"><br><button
                  class="btn btn-info">تایید</button><br><br></label><br><input hidden type="submit"> </form>

            <a style="text-align: center; float: none; margin: 5%;color: black;" style:focus="border:none">
              <button id="mailsendbtn" class="btn btn-info">ارسال کد</button>
            </a>
            <br><br><br><br>

          </div>
          <div
            style="text-align: center;width: 40%; margin-left: 5%;margin-right: 5%; margin-top: 50px; padding: 20px;padding-top: 70px;border:1px solid #dcdcdc;border-radius: 10px;float:left">
            <h5>تایید کارت ملی</h5>
            <p :style='`color:${mellivc}`'>{{ melliv }}</p>
            <form method="POST" enctype="multipart/form-data" action="verifymelli"><input class="form-control"
                name="melli" type="number" placeholder="شماره ملی"><br><input id="img1" name="melliimg" type="file"
                required> <input hidden id="submit1" type="submit"> </form><br>

            <label for="submit1"><button id="submit1l" class="btn btn-info">ارسال فایل</button></label>

            <br><br><br><br>

          </div>
          <div
            style="text-align: center;width: 40%; margin-left: 5% ;margin-right: 5%; margin-top: 50px;margin-bottom: 50px; padding: 20px;padding-top: 70px;border:1px solid #dcdcdc;border-radius: 10px;float:left">
            <h5>تایید کارت بانکی</h5>
            <p :style='`color:${bankvc}`'>{{ bankv }}</p>
            <form method="POST" enctype="multipart/form-data" action="verifybank"><input class="form-control"
                name="bank" type="number" placeholder="شماره کارت بانکی"><br><input id="img1" name="bankimg" type="file"
                required> <input hidden id="submit2" type="submit"> </form><br>


            <label for="submit2"><button id="submit2l" class="btn btn-info">ارسال فایل</button></label>

            <br><br><br><br>
          </div><br><br>
        </div>
      </CCard><br>

    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile Page',
  props: {
    msg: String,
  },
  data: () => ({
    showModal: [],
    user: ''
  }),
  mounted() {
    this.get_user()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_user() {
      await axios
        .get(`user`)
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
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