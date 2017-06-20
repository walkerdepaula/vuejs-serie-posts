<template src="./table-data.html"></template>

<script>
  export default {
    name: 'tableData',
    computed: {
      dataArray () {
        return this.$store.state.insertData.list
      }
    }
  }
</script>

<style scoped></style>
