<template>
  <div id="app">
    <NavBar />
    <br>
    <MainBody />
    
    <Cards />
    <br>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Cards from "./components/Cards.vue";
import MainBody from "./components/MainBody.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Cards,
    MainBody,
    Footer
  },
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
</style>
