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
        :items="items"
        :fields="fields"
        @row-clicked="rowClick"
      ></b-table>
      <br />
      <b-button @click="writeContent">글쓰기</b-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import data from "@/data";

export default {
  name: "Board",
  components: {
    NavBar,
  },
  data() {
    let items = data.Content.sort((a, b) => {
      return b.content_id - a.content_id;
    });
    items = items.map((contentItem) => {
      return {
        ...contentItem,
        user_name: data.User.filter(
          (userItem) => userItem.user_id === contentItem.user_id
        )[0].name,
      };
    });

    return {
      fields: [
        {
          key: "content_id",
          label: "글 번호",
        },
        {
          key: "title",
          label: "제목",
        },
        {
          key: "user_name",
          label: "작성자",
        },
        {
          key: "created_at",
          label: "작성일",
        },
      ],
      items: items,
    };
  },
  methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/board/free/detail/${item.content_id}`,
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