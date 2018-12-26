<template>
  <div id="test">
    <todo-item v-for="td in todo" v-bind:title="td.title" v-bind:key="td.id" v-bind:id="td.id"></todo-item>
    <router-link to="/">index</router-link>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'prop',
  data () {
    return {
      todo: [
        { title: 'tetsasf', id: 1 },
        { title: 'teqwetsasf', id: 2 },
        { title: 'tetsaqweqwsf', id: 3 }
      ]
    }
  }
}
Vue.component('todo-item', {
  props: ['title', 'id'],
  template: '<li>{{ title }}  {{ id }}</li>'
})
</script>
<style>
</style>
