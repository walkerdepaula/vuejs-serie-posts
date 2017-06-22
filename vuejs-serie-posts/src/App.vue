<template>
  <div id="app" class="container">
    <ul class="list-group">
      <li class="list-group-item">
        <router-link to="insert">Insert data - Vuex</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="table">Table data - Vuex</router-link>
      </li>

      <li class="list-group-item">
        <router-link to="insertEventBus">Insert data - EventBus</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="tableEventBus">Table data - EventBus</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
  // Bootstrap
  @import 'assets/vendors/bootstrap/css/bootstrap.min.css';
  // Font Awesome
  @import 'assets/vendors/fonts/css/font-awesome.min.css';

  @import 'assets/sass/style.scss';
</style>
