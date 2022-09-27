<template>
  <div>
    <NavBar />
    <div class="body">
      <div class="title">
        <b-form-input
          v-model="subject"
          placeholder="제목을 입력해주세요"
          size="lg"
          rows="1"
          max-rows="3"
        ></b-form-input>
      </div>
      <div class="content">
        <b-form-textarea
          v-model="context"
          placeholder="내용을 입력해주세요"
          rows="6"
          max-rows="10"
        ></b-form-textarea>
      </div>
      <b-button @click="updateMode ? updateContent() : uploadContent()"
        >저장</b-button
      >
      <b-button @click="cancel">취소</b-button>
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
.body {
  text-align: center;
  margin-left: 350px;
  margin-right: 350px;
  margin-top: 100px;
}
</style>

