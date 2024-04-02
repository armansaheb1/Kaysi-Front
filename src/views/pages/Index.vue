<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <div style="width: 100%; top : 0; background-color: rgba(0, 0, 0, 0.4)">
      <img style="width: 100%; float: left; z-index: -10000; position: absolute" src="/banner.jpg" alt="">
      <nav
        style="border-bottom: rgba(150,150,150,0.2) 1px solid; width: 100%; height: 80px ;position: relative; z-index:  100">
        <ul style="z-index:  100; position: relative; margin : 0; list-style: none;">
          <li style="" class="lir"><a style="font-size: 24px; color: whitesmoke; text-decoration: none;" href="">
              <img src="/logo.png" style="height: 50px; border-radius: 50%;" alt="">
            </a>
          </li>
          <li style="" class="lir"><a style="font-size: 24px; color: whitesmoke; text-decoration: none;"
              href="">خانه</a>
          </li>
          <li style="" class="lir"><a style="font-size: 24px; color: whitesmoke; text-decoration: none;" href="">درباره
              ما</a>
          </li>
          <li style="" class="lir"><a style="font-size: 24px; color: whitesmoke; text-decoration: none;" href="">تماس با
              ما</a>
          </li>




          <li style="" class="lil"><a style="font-size: 18px; color: whitesmoke; text-decoration: none;"
              class="btn btn-success" @click="$store.state.loginpopmini = true">ورود /
              ثبت نام</a>
          </li>
        </ul>
      </nav>

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
</style>
