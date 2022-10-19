<template>
  <div id="app">
    <transition name="fade"> <router-view /> </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  computed:{
    isLogin(){
      return this.$store.getters.isLogin()
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
.v-enter-active{
  transition: opacity 1s ease;
}
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0.5;
}

a {
  color: inherit !important;
  text-decoration: none !important;
}
</style>
