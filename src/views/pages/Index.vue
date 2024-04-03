<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <div style="width: 100%; top : 0; background-color: rgba(0, 0, 0, 0.4)">
      <img style="width: 100%; float: left; z-index: -10000; position: relative" src="/banner.jpg" alt="">
      <nav
        style="border-bottom: rgba(150,150,150,0.2) 1px solid; width: 100%; height: 80px ;position: relative; z-index:  100">
        <ul style="z-index:  100; position: absolute; margin : 0; list-style: none;">
          <li style="" class="lir"><a style="color: whitesmoke; text-decoration: none;" href="">
              <img src="/logo.png" style="height: 50px; border-radius: 50%;" alt="">
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
      <div style="clear: both"></div>
      <div style="display: flex; width: 32%; margin: 0.5%; border-radius: 2%; float: right; text-align: center"
        class="card">
        <div class="card-header">Title</div>
        <div class="card-body"></div>
      </div>
      <div style="display: flex; width: 32%; margin: 0.5%; border-radius: 2%; float: right; text-align: center"
        class="card">
        <div class="card-header">Title</div>
        <div class="card-body"></div>
      </div>
      <div style="display: flex; width: 32%; margin: 0.5%; border-radius: 2%; float: right; text-align: center"
        class="card">
        <div class="card-header">Title</div>
        <div class="card-body"></div>
      </div>
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

@media only screen and (max-width: 700px) {

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
    margin: 18px 10px
  }

  .lir {
    float: right;
    margin: 18px 10px
  }
}
</style>
