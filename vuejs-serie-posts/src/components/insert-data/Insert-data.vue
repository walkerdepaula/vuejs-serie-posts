<template src="./insert-data.html"></template>

<script>
export default {
  name: 'insertData',
  data () {
    return {
      form: {
        fistName: '',
        lastName: ''
      }
    }
  },
  computed: {
    dataArray () {
      return this.$store.state.insertData.list
    }
  },
  methods: {
    _cleanForm () {
      this.form = {
        fistName: '',
        lastName: ''
      }
    },
    submit () {
      if (this.form.lastName !== '' && this.form.fistName !== '') {
        this.$store.commit('DATA_ADD', this.form)

        this._cleanForm()

        this.$refs.fistName.focus()
      }
    }
  }
}
</script>

<style lang="sass"></style>
