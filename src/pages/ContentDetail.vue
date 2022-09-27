<template>
  <div>
    <NavBar />
    <b-card class="body">
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            글 번호 : {{ contentId }}
          </div>
          <div class="content-detail-content-info-left-subject">
            제목 : {{ title }}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{ user }}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{ created }}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{ context }}
      </div>
      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">덧글</div>
    </b-card>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import data from "@/data";

export default {
  name: "ContentDetail",
  components: {
    NavBar,
  },
  data() {
    const contentId = Number(this.$route.params.contentId);
    const contentData = data.Content.filter(
      (item) => item.content_id === contentId
    )[0];
    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      user: data.User.filter((item) => item.user_id === contentData.user_id)[0]
        .name,
      created: contentData.created_at,
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
.body {
  text-align: center;
  margin-top: 70px;
  margin-left: 200px;
  margin-right: 200px;
}

.content-detail-content-info {
  border: 1px solid black;
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
  margin-left: 70px;
}
.title {
font-size: 20px;
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
  min-height: 720px;
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
</style>
