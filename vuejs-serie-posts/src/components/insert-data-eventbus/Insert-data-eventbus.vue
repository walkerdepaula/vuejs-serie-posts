<template src="./insert-data.html"></template>

<script>
export default {
  name: 'insertDataEventBus',
  data () {
    return {
      form: {
        fistName: '',
        lastName: ''
      },
      list: []
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
        this.list.push(this.form)

        this.$bus.$emit('pushListData', this.list)

        this._cleanForm()

        this.$refs.fistName.focus()
      }
    }
  }
}
</script>

<style lang="sass"></style>
