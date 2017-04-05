<script>
  export default {
    name: 'CreateTodo',
    data() {
      return {
        todoName: '',
        todoList: []
      }
    },
    methods: {
      add() {
        if (this.todoName !== '') {
          this.todoList.push(this.todoName)

          this.todoName = ''

          this.$refs.todoName.focus()
        }
      }
    }
  }
</script>

<template>
  <div>
    <h3>Create to do</h3>
    <form @submit.prevent="add">
      <div class="form-group">
        <label class="control-label">Name</label>
        <input autofocus ref="todoName" type="text" class="form-control" v-model="todoName">
      </div>
      <button class="btn btn-default btn-xs" type="submit">Save</button>
    </form>
    <hr v-show="todoList.length > 0">
    <div class="col-md-4" v-for="todo in todoList">
      <div class="panel panel-default">
        <div class="panel-body">
          {{ todo }}
        </div>
      </div>
    </div>
  </div>
</template>