<template>
  <div>
    <NavBar />
    <div class="header">
      <span class="detail">질문 게시판</span>
      <hr class="featurette-divider" />
    </div>
    <b-card class="body">
      <div class="content-detail-content-info form-control">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            No : {{ this.contentData.questionId }}
          </div>
          <div class="content-detail-content-info-left-subject">
            <span class="title"> {{ this.contentData.title }} </span>
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            <span> 작성자: </span>
            <span class="user">{{ this.contentData.authorName }}</span>
          </div>
        </div>
      </div>
      <div class="content-detail-content form-control">
        {{ this.contentData.content }}
      </div>
      <div class="content-detail-button">
        <b-button class="update" variant="primary" @click="updateData"
          >수정</b-button
        >
        <b-button class="delete" variant="success" @click="deleteData"
          >삭제</b-button
        >
      </div>
      <div class="content-detail-comment">덧글</div>
    </b-card>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import axios from "axios";

export default {
  name: "ContentDetail",
  components: {
    NavBar,
  },
  mounted() {
    let url = "http://3.34.149.238:8080";
    var vm = this;
    let Num = Number(vm.$route.params.questionId);
    axios
      .get(url + "/api/question/any/one?questionId=" + Num)
      .then((res) => {
        vm.contentData = res.data;
        console.log(vm.contentData);
        return vm.contentData;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      contentData: [],
    };
  },

  methods: {
    deleteData() {
      const content_index = data.Content.findIndex(
        (item) => item.content_id === this.contentId
      );
      data.Content.splice(content_index, 1);
      this.$router.push({
        path: "/board/free",
      });
    },
    updateData() {
      this.$router.push({
        path: `/board/free/create/${this.contentId}`,
      });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Patrick+Hand&family=Poor+Story&family=Shadows+Into+Light&display=swap");

.body {
  text-align: center;
  margin-top: 50px;
  margin-left: 350px;
  margin-right: 350px;
  font-family: "Jua", sans-serif;
}

.content-detail-content-info {
  border: 1px solid black;
  height: 100px;
  display: flex;
  justify-content: space-between;
}

.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.title {
  font-size: 30px;
  margin-right: 150px;
}
.user {
  font-size: 25px;
}

.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  height: 400px;
}

.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}

.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.header {
  margin-top: 50px;
  margin-left: 350px;
  margin-right: 350px;
}
.featurette-divider {
  margin-top: 5px;
}
.detail {
  font-family: "Jua", sans-serif;
  font-size: 50px;
  font-weight: 200;
}
.update {
  margin: 5px;
}
.delete {
  margin: 5px;
}
</style>
