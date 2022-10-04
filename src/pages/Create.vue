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
import data from "@/data";

export default {
  name: "Create",
  components: {
    NavBar,
  },
  data() {
    return {
      subject: "",
      context: "",
      userId: 1,
      createdAt: "2022-09-25 11:32:42",
      updatedAt: null,
      updateMode: this.$route.params.contentId > 0 ? true : false,
    };
  },
  created() {
    if (this.$route.params.contentId > 0) {
      const contentId = Number(this.$route.params.contentId);
      this.updateObject = data.Content.filter(
        (item) => item.content_id === contentId
      )[0];
      this.subject = this.updateObject.title;
      this.context = this.updateObject.context;
    }
  },
  methods: {
    cancel() {
      this.$router.push({
        path: "/board/free/",
      });
    },
    uploadContent() {
      let items = data.Content.sort((a, b) => {
        return b.content_id - a.content_id;
      });
      const content_id = items[0].content_id + 1;
      data.Content.push({
        content_id: content_id,
        user_id: this.userId,
        title: this.subject,
        context: this.context,
        created_at: this.createdAt,
        updated_at: null,
      });
      this.$router.push({
        path: "/board/free/",
      });
    },
    updateContent() {
      this.updateObject.title = this.subject;
      this.updateObject.context = this.context;
      this.$router.push({
        path: "/board/free/",
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

