<template>
  <div>
    <NavBar />

    <div class="header">
      <span class="title">질문 게시판</span>
      <hr class="featurette-divider" />
      <span v-if="isLoading">Loading...</span>
    </div>

    <div class="Board">
      <b-table
        hover
        id="my-table"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        large
        @row-clicked="rowClick"
      ></b-table>
      <br />
      <b-pagination
        class="pagination"
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        @page-click="pageClick"
      ></b-pagination>
      <br />
      <b-button @click="writeContent">글쓰기</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import axios from "../axios/index.js";

export default {
  name: "Board",
  components: {
    NavBar,
  },

  data() {
    return {
      perPage: 10,
      currentPage: 1,
      allPage: "",
      fields: [
        { key: "questionId", label: "번호" },
        { key: "title", label: "질문 제목" },
        { key: "authorName", label: "작성자" },
        { key: "answerStatus", label: "비고" },
      ],
      items: [],
    };
  },
  computed: {
    rows() {
      return this.perPage * this.allPage;
    },
  },
  created() {
    this.getNoticeListByPage(this.currentPage);
  },
  methods: {
    rowClick(item) {
      this.$router.push({
        path: `/board/free/detail/${item.questionId}`,
      });
    },
    pageClick(button, page) {
      (this.currentPage = page), this.getNoticeListByPage(page);
    },
    getNoticeListByPage(page) {
      let url = "http://3.34.149.238:8080";
      var vm = this;
      let curPage = page - 1;
      axios
        .get(
          url +
            "/api/question/any/list?" +
            "page=" +
            curPage +
            "&" +
            "size=" +
            10
        )
        .then((res) => {
          vm.allPage = res.data.totalPageNumber;
          res.data.getQuestionListResponseDtoList.map((item) => {
            if (item.answerStatus == "ANSWERED") {
              item.answerStatus = "답변 완료";
            } else {
              item.answerStatus = "-";
            }
          });
          console.log(res.data.getQuestionListResponseDtoList);
          vm.items = res.data.getQuestionListResponseDtoList;
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
  margin-left: 250px;
  margin-right: 250px;
  font-family: "Jua", sans-serif;
}
</style>