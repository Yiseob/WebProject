<template>
  <div>
    <NavBar />

    <div class="header">
      <span class="title">질문 게시판</span>
      <hr class="featurette-divider" />
    </div>

    <div class="Board">
      <b-table
        hover
        id="my-table"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        small
        @row-clicked="rowClick"
      ></b-table>
      <br />
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <br />
      <b-button @click="writeContent">글쓰기</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import axios from "axios";

export default {
  name: "Board",
  components: {
    NavBar,
  },

  data() {
    return {
      perPage: 3,
      currentPage: 1,
      fields: ["questionId", "title", "authorName"],
      items: [],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  created() {
    let url = "http://3.34.149.238:8080";
    var vm = this;
    axios.get(url + "/api/question/any/list").then((res) => {
      vm.items = res.data;
      console.log(vm.items)
    });
  },
  methods: {
    rowClick(item) {
      this.$router.push({
        path: `/board/free/detail/${item.questionId}`,
      });
    },
    writeContent() {
      this.$router.push({
        path: "/board/free/create",
      });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Patrick+Hand&family=Poor+Story&family=Shadows+Into+Light&display=swap");

.header {
  margin-top: 50px;
  margin-left: 350px;
  margin-right: 350px;
}
.featurette-divider {
  margin-top: 5px;
}
.title {
  font-family: "Jua", sans-serif;
  font-size: 50px;
  font-weight: 200;
}
.Board {
  text-align: center;
  margin-top: 50px;
  margin-left: 350px;
  margin-right: 350px;
  font-family: "Jua", sans-serif;
}
</style>