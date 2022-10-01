<template>
  <div>
    <NavBar />
    <br />
    <MainBody />
    <br />
    <Store />
    <br />
    <Cards />
    <br />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import Cards from "@/components/Main/Cards.vue";
import MainBody from "@/components/Main/MainBody.vue";
import Footer from "@/components/Main/Footer.vue";
import Store from "@/components/Main/Store.vue";

export default {
  name: "MainComponent",
  components: {
    NavBar,
    Cards,
    MainBody,
    Footer,
    Store,
  },
};
</script>
<style scoped>
</style>