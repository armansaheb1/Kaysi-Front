<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mm" style="overflow: auto;max-height: 70%;padding-bottom: 20px;">
    <div v-for="item in subjects " v-bind:key="item">
      <div v-if="item['sender'] == 1" style="width: 70%; direction: rtl;float: left;" class="alert alert-warning">
        <h5 style="margin: 0">پشتیبانی</h5><br>
        <p style="color: black">
          {{ item['text'] }}
        </p>
      </div>

      <div v-else style="width: 70%; direction: rtl;float: right;" class="alert alert-success">
        <h5 style="margin: 0">شما</h5><br>
        <p style="color: black">
          {{ item['text'] }}
        </p>
      </div>

    </div><br><br>
    <div style="height: 50px;"></div>

    <div style="position: fixed; bottom: 0;left:0; width: 100%; height: 110px; background-color: gold; z-index: 100;">
      <div style="float: left;width: 80%; height: 80%">
        <textarea v-model="text" class="form-control" rows="2" style="margin: 2.5%; width: 95%; direction: rtl;"
          placeholder="متن پیام"></textarea>

      </div>
      <div style="width: 20%; float: right;height: 100%;">
        <button @click="addticket()" class="btn btn-warning" style="height:70px; width: 80%;margin: 20px">Send</button>
      </div>
    </div>


  </div>
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
    user: '',
    subjects: [],
    text: '',
    title: ''
  }),
  mounted() {
    setTimeout(() => {
      this.$store.state.sidebarVisible = false
    }, 100);
    this.get_user()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_user() {
      var id = this.$route.params.id
      await axios
        .get(`tickets/${id}`)
        .then(response => response.data)
        .then(response => {
          this.subjects = response
          console.log(this.subjects)
          setTimeout(() => {
            var container = document.querySelector('html')
            container.scrollTop = container.scrollHeight;
          }, 100);

        })
    },
    async addticket() {
      var id = this.$route.params.id
      await axios
        .post(`ansticket`, { des: this.text, id: id })
        .then(response => response.data)
        .then(response => {
          this.subjects = response
          setTimeout(() => {
            var container = document.querySelector('html')
            container.scrollTop = container.scrollHeight;
          }, 100);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.chat-btn {
  display: none !important;
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