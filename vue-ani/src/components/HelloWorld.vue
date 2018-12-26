<template>
  <div class="hello">
    <h1>123 {{ show }}</h1>
    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce" v-on:before-enter="beforeEnter" v-on:enter="enter">
        <p v-if="show"> consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
      <router-link to="/prop">prop</router-link>
    </div>
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      show: true
    }
  },
  methods: {
    beforeEnter: function () {
      console.log('beforeEnter......')
    },
    enter: function () {
      console.log('enter ....')
    }
  }
}
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
