<template src="./insert-data.html"></template>

<script>
export default {
  name: 'insertData',
  data () {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  },
  computed: {
    dataArray () {
      return this.$store.state.dataArray
    }
  },
  methods: {
    _cleanForm () {
      this.form = {
        name: '',
        email: ''
      }
    },
    submit () {
      if (this.form.email !== '' && this.form.name !== '') {
        this.$store.commit('DATA_ADD', this.form)

        debugger
        this._cleanForm()

        this.$refs.name.focus()
      }
    }
  }
}
</script>

<style lang="sass"></style>
