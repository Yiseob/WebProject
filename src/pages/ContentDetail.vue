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
            <span class="user">{{ this.contentData.questionAuthorName }}</span>
          </div>
        </div>
      </div>
      <div class="content-detail-content form-control">
        {{ this.contentData.questionContent }}
      </div>
      <div class="content-detail-button">
        <b-button class="update" variant="primary" @click="updateData"
          >수정</b-button
        >
        <b-button class="delete" variant="success" @click="deleteData"
          >삭제</b-button
        >
      </div>
      <div class="content-detail-comment">
        답변 내용 :
        <div v-if="isAdmin">
          <div class="replyContent">
            <input
              type="text"
              class="replyContent form-control"
              id="floatingInput"
              placeholder="답변 내용"
              v-model="replyContent"
              autocomplete="off"
            />
          </div>

          <b-button
            class="submitReply"
            @click="updateMode ? updateReply() : uploadReply()"
          >
            <div v-if="updateMode">답변 수정</div>
            <div v-else>답변 등록</div></b-button
          >
        </div>
        <div v-else></div>
        <br />
        <span class="reply">{{ this.contentData.answerContent }}</span>
      </div>
    </b-card>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "ContentDetail",
  components: {
    NavBar,
  },
  mounted() {
    let url = "http://3.34.149.238:8080";
    var vm = this;
    let Num = Number(vm.$route.params.questionId);
    if (vm.$store.state.role == "ADMIN") {
      vm.isAdmin = true;
    } else {
      vm.isAdmin = false;
    }
    axios
      .get(url + "/api/question/any/one?questionId=" + Num)
      .then((res) => {
        vm.contentData = res.data;
        vm.contentData.answerId == null
          ? (vm.updateMode = false)
          : (vm.updateMode = true);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["token"]),
    ...mapState(["role"]),
  },
  data() {
    return {
      contentData: [],
      relpyContent: "",
      updateMode: "",
      isAdmin: false,
    };
  },

  methods: {
    deleteData() {
      let url = "http://3.34.149.238:8080";
      var vm = this;
      let Num = Number(vm.$route.params.questionId);
      let token = vm.$store.state.token;
      let isDelete = confirm("게시글을 삭제하시겠습니까?");
      let config = {
        headers: {
          Authorization: token,
        },
      };
      if (isDelete == true) {
        axios
          .patch(url + "/api/question/status?questionId=" + Num, null, config)
          .then((res) => {
            alert("게시글이 삭제되었습니다.");
            this.$router.push({
              path: "/board/free",
            });
          })
          .catch((err) => {
            console.log(err);
            alert("게시글 삭제에 실패하였습니다.");
          });
      }
    },
    updateData() {
      this.$router.push({
        path: `/board/free/create/${this.contentData.questionId}`,
      });
    },
    uploadReply() {
      let url = "http://3.34.149.238:8080";
      var vm = this;
      let token = vm.$store.state.token;
      let Num = Number(vm.$route.params.questionId);
      let data = {
        content: this.replyContent,
        questionId: Num,
      };
      let config = {
        headers: {
          Authorization: token,
        },
      };
      let isReply = confirm("답변을 등록하시겠습니까?");
      if (isReply == true) {
        axios
          .post(url + "/api/answer", data, config)
          .then((res) => {
            alert("답변이 등록되었습니다");
            vm.$router.push({
              path: "/board/free",
            });
          })
          .catch((err) => {
            console.log(err);
            alert("답변 등록에 실패했습니다.");
          });
      }
    },
    updateReply() {
      let url = "http://3.34.149.238:8080";
      var vm = this;
      let token = vm.$store.state.token;

      let data = {
        content: this.replyContent,
        answerId: this.contentData.answerId,
      };
      let config = {
        headers: {
          Authorization: token,
        },
      };
      axios
        .patch(url + "/api/answer", data, config)
        .then((res) => {
          alert("답변이 수정되었습니다");
          vm.$router.push({
            path: "/board/free/",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("답변 수정에 실패했습니다.");
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
