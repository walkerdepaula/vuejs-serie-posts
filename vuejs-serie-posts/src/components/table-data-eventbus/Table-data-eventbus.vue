<template src="./table-data.html"></template>

<script>
  export default {
    name: 'tableDataEventbus',
    data () {
      return {
        list: []
      }
    },
    created () {
      this.$bus.$off('pushListData', this.pushData)
      this.$bus.$on('pushListData', this.pushData)
    },
    methods: {
      pushData (dataArray) {
        this.list = dataArray
      }
    }
  }
</script>

<style scoped></style>
