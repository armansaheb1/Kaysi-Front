<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div style="width: 100%; top : 0; background-color: rgba(0, 0, 0, 0.4)">
      <img style="width: 100%;  z-index: -10000" src="/banner.jpg" alt="">
      <nav
        style="border-bottom: rgba(150,150,150,0.2) 1px solid; width: 100%; height: 80px ;position: absolute; top: 0; z-index:  100">
        <ul style="z-index:  100; margin : 0; list-style: none;">
          <li style="margin-top: 16px" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="">
              <img src="/logo.png" style="border-radius: 50%;height: 50px; border-radius: 50%;" alt="">
            </a>
          </li>
          <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="">خانه</a>
          </li>
          <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="">درباره
              ما</a>
          </li>
          <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="">تماس با
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

    </div>
    <div style="clear: both"></div>
    <div style="position: relative ;padding: 2%">
      <h3 style="width: 100%; text-align: center">
        چرا کی سی؟
      </h3>
      <br>

      <div style="padding: 5%">
        <div v-for="item in stickers" v-bind:key="item" style="height: 500px;" class=" card third">
          <div class="card-header"><img :src="item.get_image" style="width: 60%; margin: auto" alt="">
          </div>
          <div class="card-body" style="text-align: justify; direction: rtl;">
            <h5>
              {{ item.title }} </h5>
            <hr>
            <p style="font-size: 15px;">
              {{ item.text }}
            </p>
          </div>
        </div>

      </div>
    </div>
    <div style="clear: both;"></div>
    <div style="height: 100px">

      <div style="position: relative ;padding: 2%">
        <h3 style="width: 100%; text-align: right; padding: 2%">
          اخبار ارز دیجیتال </h3>
        <br>

        <div style="padding: 5%; padding-top: 0;">
          <div v-for="item in news" v-bind:key="item" class="second" style="margin : 3%; border-radius : 2%;">
            <a :href="`/news/${item.id}`" style="color: #444">
              <div style="width: 35%; float: right!important;">
                <img :src="item.get_image" style="width: 100%; margin: auto" alt="">
              </div>
              <div style="text-align: justify; direction: rtl;width: 65%; float: left; padding-right: 3%;">
                <h6 style="font-weight: bold;">
                  {{ item.title }} </h6>
                <hr>
                <p class="mob" style="font-size: 14px;margin-top: -5px;">
                  {{ item.text.slice(0, 90) + '...' }}
                </p>
                <p class="nmob" style="font-size: 14px;margin-top: -5px;">
                  {{ item.text.slice(0, 250) + '...' }}
                </p>
              </div>
              <div style="clear: both"></div>
            </a>
          </div>

        </div>
        <div style="clear: both;"></div>

      </div>
      <div style="width: 100%; height: 65px; background-color: #444; text-align: center;padding: 20px; color: white;">
        KC شرکت سرمایه گذاری
      </div>
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
        .get(`posts`)
        .then(response => response.data)
        .then(response => {
          this.stickers = response
        })
    },
    async get_news() {
      await axios
        .get(`news`)
        .then(response => response.data)
        .then(response => {
          this.news = response
        })
    },
  },
  mounted() {
    this.get_stickers()
    this.get_news()
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
