<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div style="width: 100%; top : 0; background-color: rgba(0, 0, 0, 0.4)">
      <nav
        style="background: black;border-bottom: rgba(150,150,150,0.2) 1px solid; width: 100%; height: 80px ;position: absolute; top: 0; z-index:  100">
        <ul style="z-index:  100; margin : 0; list-style: none;">
          <li style="margin-top: 16px" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="/">
              <img src="/logo.png" style="border-radius: 50%;height: 50px; border-radius: 50%;" alt="">
            </a>
          </li>
          <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="/">خانه</a>
          </li>
          <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="/about-us">درباره
              ما</a>
          </li>
          <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="/contact-us">تماس با
              ما</a>
          </li>




          <li v-if="!$store.state.isAuthenticated" style="" class="lil"><a
              style="font-size: 12px!important; color: whitesmoke; text-decoration: none;" class="btn btn-success"
              @click="$store.state.loginpopmini = true">ورود /
              ثبت نام</a>
          </li>
          <li v-else style="" class="lil"><a
              style="font-size: 12px!important; color: whitesmoke; text-decoration: none;" class="btn btn-success"
              href="/dashboard">داشبورد</a>
          </li>
        </ul>
      </nav>

    </div><br><br><br><br>

    <div style="clear: both;"></div>

    <div style="padding: 5%;text-align: right" v-html="stickers.text">
    </div>

  </div>

</template>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  methods: {
    async get_stickers() {
      await axios
        .get(`pages/contactus`)
        .then(response => response.data)
        .then(response => {
          this.stickers = response
        })
    },
  },
  mounted() {
    this.get_stickers()
  },
  data() {
    return {
      stickers: [],
      news: []
    }
  }
}
</script>

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

.mob {
  display: none;
}

.nmob {
  display: block;
}

.second {
  width: 43%;
  margin: .5%;
  float: right;
}

@media only screen and (max-width: 1023px) {

  .second {
    width: 93%;
    margin: .5%;
    float: right;
  }

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
  .mob {
    display: block;
  }

  .nmob {
    display: none;
  }

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
