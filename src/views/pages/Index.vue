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




          <li style="" class="lil"><a style="font-size: 12px!important; color: whitesmoke; text-decoration: none;"
              class="btn btn-success" @click="$store.state.loginpopmini = true">ورود /
              ثبت نام</a>
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
        <div style="" class=" card third">
          <div class="card-header"><img src="/logo.png" style="border-radius: 50%;width: 60%; margin: auto" alt="">
          </div>
          <div class="card-body" style="text-align: justify; direction: rtl;">
            <h3>
              کی سی چیست ؟
            </h3>
            <hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
        <div style="" class="card third">
          <div class="card-header"><img src="/logo.png" style="border-radius: 50%;width: 60%; margin: auto" alt="">
          </div>
          <div class="card-body" style="text-align: justify; direction: rtl;">
            <h3>
              کی سی چیست ؟
            </h3>
            <hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
        <div style="" class="card third">
          <div class="card-header"><img src="/logo.png" style="border-radius: 50%;width: 60%; margin: auto" alt="">
          </div>
          <div class="card-body" style="text-align: justify; direction: rtl;">
            <h3>
              کی سی چیست ؟
            </h3>
            <hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
    <div style="height: 100px">

    </div>

  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
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
