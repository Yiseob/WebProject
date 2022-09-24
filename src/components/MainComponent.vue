<template>
  <div>
    <NavBar />
    <br />
    <MainBody />
    <br />
    <Cards />
    <br />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./Main/NavBar.vue";
import Cards from "./Main/Cards.vue";
import MainBody from "./Main/MainBody.vue";
import Footer from "./Main/Footer.vue";

export default {
  name: "MainComponent",
  components: {
    NavBar,
    Cards,
    MainBody,
    Footer,
  },
};
</script>
<style scoped>
</style>