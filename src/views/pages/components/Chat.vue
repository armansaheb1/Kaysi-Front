<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<template>

  <div v-if="!hide || !hide2" class="containerss"
    style="background:none;width:100%; padding:0 ; border-radius:15%; margin:0!important; position: fixed;bottom: 0;">
    <div style="margin:0; width:100%; height: 100%;z-index: 1000;">
      <div v-if="!hide2" id="chat-container"
        style="height:100% ;  border-radius:30px ; background:none;z-index: 1000; position: relative; top: 0"
        class="card">

        <div class="card-header text-white text-center"
          style="height:60px ; background:#2f3237 ; border-radius: 15px 15px 0 0 ">
          پشتیبانی آنلاین<br>
          <button class="btn btn-secondary"
            style="position:absolute;top:5px;right:5px;padding:0 7px;border-radius:50%!important ; width:25px!important; height:25px"
            @click="hide2 = true">-</button>
        </div>


        <div class="card-body" style="height:320px; overflow:auto">
          <div class=" chat-body" style="width:100%;height:330px;">
            <div class="chat-section">
              <div class="card-footer text-muted" style="z-index:1;width:100%;padding:0; border-style:none"
                id="emailadd">
                <br>
                <form @submit.prevent="get_user()">
                  <div>
                    <div class="col-12">
                      <input v-model="fullname" required type="text" placeholder="نام کامل" />
                    </div><br>
                    <div class="col-12">
                      <input v-model="mobile" required type="text" placeholder="موبایل" />
                    </div><br>
                    <div class="col-12">
                      <input v-model="email" required type="text" placeholder="ایمیل" />
                    </div><br>
                    <div class="col-12">
                      <button class="btn btn-dark" style="width:100%">شروع چت</button>
                    </div>
                  </div>
                </form>
              </div><br><br>
              <div style="clear:both"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-if="!hide" id="chat-container" style="height:100% ;  border-radius:30px ; background:none;z-index: 1000"
      class="card">

      <div class="card-header text-white text-center"
        style="height:60px ; background:#2f3237 ; border-radius: 15px 15px 0 0 ">
        پشتیبانی آنلاین<br>
        <button class="btn btn-secondary"
          style="position:absolute;top:5px;right:5px;padding:0 7px;border-radius:50%!important ; width:25px!important; height:25px"
          @click="hide = true">-</button>
      </div>


      <div class="card-body" style="height:320px; overflow:auto">
        <div class=" chat-body" style="width:100%;height:300px;">
          <div v-for="message in messages" :key="message.id" class="chat-section">
            <template v-if="!message.admin">
              <div style="max-width:85%;min-width:60% ; float:right ;">
                <span style="width:100% ; background:grey ; padding:5%"
                  class="card-text speech-bubble  float-right text-white subtle-blue-gradient">
                  <span v-if="typeof (message.user) === 'string'"
                    style="font:12px 'UD'; color:black ; font-weight:bold">{{ message.user }} <br></span>
                  <span v-else style="font:12px 'UD'; color:black ; font-weight:bold">{{ message.username }}
                    <br></span><br>
                  {{ message.message }}
                </span>
              </div><br><br>
              <div style="clear:both"></div>
            </template>
            <template v-else>

              <div style=" float:right">
                <span style="max-width:85% ;min-width:60% ;  float:left  ; padding:5%" class="card-text speech-bubble ">
                  <span v-if="typeof (message.user) === 'string'"
                    style="font:12px 'UD'; color:black ; font-weight:bold">{{ message.user }} <br></span>
                  <span v-else style="font:12px 'UD'; color:black ; font-weight:bold">{{ message.username }}
                    <br></span><br>
                  {{ message.message }}
                </span>
              </div><br><br>
              <div style="clear:both"></div>
            </template>
          </div>
        </div>
      </div>

      <div class="card-footer text-muted" style="z-index:1 ; background: #2f3237">
        <form @submit.prevent="postMessage">
          <div>
            <div class="col-sm-12">
              <input class="inn" style="font-family:'yekan'; border-style:none" required v-model="message" type="text"
                placeholder="متن پیام ..." />
            </div><br><br>
            <div class="col-sm-12">
              <button class="btn btn-secondary" style="width:100% ; font-family: 'yekan'">ارسال پیام</button>
            </div>
          </div>
        </form>
      </div>




    </div>
  </div>
  <div>

  </div>
  <div v-if="$store.state.isAuthenticated || uri" class="chat-btn"
    style="background:#f5f5ff;border-radius:50%; box-shadow: .5px .5px .5px .5px grey">
    <span v-if="notread"
      style="width:22px;height:22px;border-radius:50%; background:red; position:absolute ;text-align:center; color:white ; font-family:'UD'!important">{{
        notread }}</span>
    <img @click="get_user(); $store.state.hide = false; hide = false"
      style="border-radius:50%;width:90%;height:90%; margin: 5%"
      src="https://png.pngtree.com/element_our/png/20181229/vector-chat-icon-png_302635.jpg">
  </div>
  <div @click="hide2 = false" v-if="!$store.state.isAuthenticated && hide2 && !uri" class="chat-btn"
    style="background:#f5f5ff;border-radius:50%; box-shadow: .5px .5px .5px .5px grey; z-index:100000000000000000">
    <span v-if="notread"
      style="width:22px;height:22px;border-radius:50%; background:red; position:absolute ;text-align:center; color:white ; font-family:'UD'!important">{{
        notread }}</span>
    <img style="border-radius:50%;width:90%;height:90%; margin: 5%"
      src="https://png.pngtree.com/element_our/png/20181229/vector-chat-icon-png_302635.jpg">
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      notread: 0,
      username: false,
      usernameadd: '',
      hide2: true,
      sessionStarted: false,
      messages: {},
      message: '',
      email: '',
      uri: '',
      hide: this.$store.state.hide,
      fullname: '',
      mobile: ''
    }
  },
  mounted() {
    this.hider()
  },
  beforeMount() {
    this.get_user()
  },



  methods: {
    async get_user() {
      if (localStorage.getItem('uri')) {
        this.uri = localStorage.getItem('uri')
        this.hide2 = true
        this.$store.state.hide = false
        this.hide = false
        this.startChatSession()
      } else
        if (this.$store.state.isAuthenticated) {
          await axios
            .post('chats/user')
            .then(response => {
              this.username = response.data.username
              this.uri = response.data.uri
              localStorage.setItem('uri', response.data.uri)
              if (response.data.uri) {
                this.joinChatSession()
                this.sessionStarted = true
              }
              this.startChatSession()
            })
        } else {
          if (this.fullname && this.mobile)
            await axios
              .post('chats/user', { mobile: this.mobile, name: this.fullname, email: this.email })
              .then(response => {
                this.username = response.data.username
                this.uri = response.data.uri
                localStorage.setItem('uri', response.data.uri)
                if (response.data.uri) {
                  this.joinChatSession()
                  this.sessionStarted = true
                }
                this.hide2 = true
                this.$store.state.hide = false
                this.hide = false
                this.startChatSession()
              })
        }

    },
    hider() {
      this.$store.state.hide = true
      this.hide = this.$store.state.hide
    },
    async startChatSession() {
      this.chatseen()
      this.fetchChatSessionHistory()

    },
    async postMessage() {
      if (this.$store.state.isAuthenticated) {
        const data = { message: this.message }
        await axios
          .post(`chats/${this.uri}/messages/`, data)
          .then(data => {
            this.messages.push(data.data)
            this.message = '' // clear the message after sending
          })
          .catch(() => {
          })
      } else {
        const data = { message: this.message, email: localStorage.getItem('email') }
        await axios
          .post(`chats/${this.uri}/messages/`, data)
          .then(data => {
            this.messages.push(data.data)
            this.message = '' // clear the message after sending
          })
          .catch(() => {
          })
      }

    },
    async chatseen() {
      await axios
        .get(`chats/${this.uri}/seen/`)
        .then(() => {
          this.notread = 0
        })
        .catch(() => {
        })
    },
    async joinChatSession() {
      this.fetchChatSessionHistory()
    },

    async fetchChatSessionHistory() {
      await axios
        .get(`chats/${this.uri}/messages/`)
        .then(data => {
          this.messages = data.data.messages
          // eslint-disable-next-line no-unused-vars
          var tempnotread = 0
          this.notread = data.data.notseen
          setTimeout(() => {
            this.fetchChatSessionHistory()
          }, 20000)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea:focus,
input:focus,
button:focus {
  outline: none;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.btn {
  border-radius: 0 !important;
}

.card-footer input[type="text"] {
  background-color: #ffffff;
  color: #888;
  padding: 7px;
  font-size: 13px;
  border: 2px solid #cccccc;
  width: 100%;
  height: 38px;
}

.card-header a {
  text-decoration: underline;
}

.card-body {
  background-color: #ddd;
  padding: 0;
  padding-top: 5%;
}

.chat-body {
  margin-top: -15px;
  margin-bottom: -5px;
  height: 380px;
}

.speech-bubble {
  display: inline-block;
  position: relative;
  border-radius: 0.4em;
  padding: 10px;
  background-color: #fff;
  font-size: 14px;
}

.subtle-blue-gradient {
  background: linear-gradient(45deg, #004bff, #007bff);
}

.speech-bubble-user:after {
  content: "";
  position: absolute;
  right: 4px;
  top: 10px;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-left-color: #007bff;
  border-right: 0;
  border-top: 0;
  margin-top: -10px;
  margin-right: -20px;
}

.speech-bubble-peer:after {
  content: "";
  position: absolute;
  right: 3px;
  top: 10px;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: #ffffff;
  border-top: 0;
  border-left: 0;
  margin-top: -10px;
  margin-left: -20px;
}

.chat-section:first-child {
  margin-top: 10px;
}

.chat-section {
  margin-top: 15px;
}

.send-section {
  margin-bottom: -20px;
  padding-bottom: 10px;
}

.chat-body {
  padding: 2%;
}
</style>