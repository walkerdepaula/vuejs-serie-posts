<template>
  <div id="app" class="nav-md">
    <div class="container body">
      <div class="main_container">
        <keep-alive>
          <sidebar-view v-if="!isLoginPage"></sidebar-view>
        </keep-alive>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isLoginPage: true
    }
  },
  watch: {
    '$route' (teste, teste1) {
      if (teste.fullPath !== '/') {
        this.isLoginPage = false
      } else {
        this.isLoginPage = true
      }
    }
  }
}
</script>

<style lang="sass">
  // Bootstrap
  @import 'assets/vendors/bootstrap/css/bootstrap.min.css';
  // Animate
  @import 'assets/vendors/dashboard/animate.min.css';
  // Font Awesome
  @import 'assets/vendors/fonts/css/font-awesome.min.css';
  // NProgress
  @import 'assets/vendors/dashboard/nprogress.css';

  @import 'assets/sass/style.scss';
</style>
