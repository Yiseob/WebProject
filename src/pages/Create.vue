<template>
  <div>
    <NavBar />
    <div class="header">
      <span class="question">질문 작성</span>
      <hr class="featurette-divider" />
    </div>

    <div class="body">
      <div class="mb-2">
        <input
          type="text"
          class="title form-control"
          id="floatingInput"
          placeholder="글 제목"
          v-model="subject"
          autocomplete="off"
          required
        />
      </div>
      <div class="mb-2">
        <input
          type="text"
          class="content form-control"
          id="floatingInput"
          placeholder="글 내용"
          v-model="context"
          autocomplete="off"
          required
        />
      </div>
      <br />
      <b-button
        class="save"
        @click="updateMode ? updateContent() : uploadContent()"
        >저장</b-button
      >
      <b-button class="cancel" @click="cancel">취소</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Create",
  components: {
    NavBar,
  },
  computed: {
    ...mapState(["token"]),
  },
  data() {
    return {
      subject: "",
      context: "",
      userId: 1,
      createdAt: "2022-09-25 11:32:42",
      updatedAt: null,
      updateMode: Number(this.$route.params.questionId) > 0 ? true : false,
    };
  },
  created() {
    if (Number(this.$route.params.questionId) > 0) {
      let url = "http://3.34.149.238:8080";
      var vm = this;
      let Num = Number(vm.$route.params.questionId);
      axios
        .get(url + "/api/question/any/one?questionId=" + Num)
        .then((res) => {
          this.subject = res.data.title;
          this.context = res.data.questionContent;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  methods: {
    cancel() {
      this.$router.push({
        path: "/board/free/",
      });
    },
    uploadContent() {
      let url = "http://3.34.149.238:8080";
      let data = {
        accessLevel: "PUBLIC",
        content: this.context,
        title: this.subject,
      };
      var vm = this;
      let token = vm.$store.state.token;
      let config = {
        headers: {
          Authorization: token,
        },
      };
      axios
        .post(url + "/api/question", data, config)
        .then((res) => {
          alert("문의글이 등록되었습니다");
          vm.$router.push({
            path: "/board/free/",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("문의글 게시에 실패했습니다.");
        });

      // let items = data.Content.sort((a, b) => {
      //   return b.content_id - a.content_id;
      // });
      // // 글 번호 역순으로 배열 처리
      // const content_id = items[0].content_id + 1;
      // // 지금 등록하는 글의 글 번호
      // data.Content.push({
      //   content_id: content_id,
      //   user_id: this.userId,
      //   title: this.subject,
      //   context: this.context,
      //   created_at: this.createdAt,
      //   updated_at: null,
      // });
    },
    updateContent() {
      var vm = this;
      let url = "http://3.34.149.238:8080";
      const contentId = Number(vm.$route.params.questionId);
      let data = {
        accessLevel: "PUBLIC",
        content: vm.context,
        questionId: contentId,
        title: vm.subject,
      };
      let token = vm.$store.state.token;
      let config = {
        headers: {
          Authorization: token,
        },
      };
      axios
        .patch(url + "/api/question", data, config)
        .then((res) => {
          alert("문의글이 수정되었습니다");
          vm.$router.push({
            path: "/board/free/",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("문의글 수정에 실패했습니다.");
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Patrick+Hand&family=Poor+Story&family=Shadows+Into+Light&display=swap");

.body {
  text-align: center;
  margin-left: 350px;
  margin-right: 350px;
  margin-top: 50px;
  font-family: "Jua", sans-serif;
}
.title {
  height: 100px;
  margin-bottom: 50px;
}
.content {
  height: 400px;
}
.header {
  margin-top: 50px;
  margin-left: 350px;
  margin-right: 350px;
}
.featurette-divider {
  margin-top: 5px;
}
.question {
  font-family: "Jua", sans-serif;
  font-size: 50px;
  font-weight: 200;
}
.save {
  margin: 5px;
}
.cancel {
  margin: 5px;
}
</style>

