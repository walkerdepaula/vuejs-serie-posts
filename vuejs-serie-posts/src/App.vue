<template>
  <div id="app" class="container">
    <ul class="list-group">
      <li class="list-group-item">
        <a href="/insert">Insert data</a>
        <router-link :to="{ name: 'insert' }">Insert data</router-link>
      </li>
      <li class="list-group-item">
        <a href="/table">Table data</a>
        <router-link :to="{ name: 'table' }">Table data</router-link>
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
