<template>
  <div>
    <NavBar />
    <br />
    <div class="Board">
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        @row-clicked="rowClick"
      ></b-table>
    </div>
  </div>
</template>

<script>
import NavBar from "./Main/NavBar.vue";
import data from "@/data";
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

export default {
  name: "Board",
  components: {
    NavBar,
  },
  data() {
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
          key: "created_at",
          label: "작성일",
        },
        {
          key: "user_name",
          label: "글쓴이",
        },
      ],
      items: items,
    };
  },
};
</script>
<style scoped>
.Board {
  text-align: center;
  margin-top: 50px;
  margin-left: 230px;
  margin-right: 230px;
}
</style>