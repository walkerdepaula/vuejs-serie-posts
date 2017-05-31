<template src="./login.html"></template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userCategory: 'investidor',
      password: '',
      userName: ''
    }
  },
  methods: {
    submitLogin () {
      this.$router.push('home') // Redirect to documentsTable component
    }
  }
}
</script>

<style lang="sass" scoped>
  .login { position: fixed; width: 100%; height: 100%; }
</style>
