<template>
  <div class="d-flex flex-column align-items-center">
    <post-card
      v-for="(post, index) in posts.slice(
        pageSize * (pageIndex - 1),
        pageSize * (pageIndex - 1) + pageSize
      )"
      :key="index"
      :isEditable="isPostsEditable"
      :isDeletable="isPostsDeletable"
      :post="post"
      class="mb-3"
    />
    <div class="row mb-3">
      <button-custom
        v-if="pageIndex > 1"
        @click="goToPreviousPage"
        color="link"
      >
        &lt;
      </button-custom>
      <button-custom
        v-for="page in pagesCount"
        :key="page"
        @click="goToPage(page)"
        color="link"
      >
        {{ page }}
      </button-custom>
      <button-custom
        v-if="pageIndex < pagesCount"
        @click="goToNextPage"
        color="link"
      >
        &gt;
      </button-custom>
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import { mapState } from "vuex";
import ButtonCustom from "@/components/ButtonCustom";

export default {
  components: {
    PostCard,
    ButtonCustom,
  },
  props: {
    isPostsEditable: {
      default: false,
    },
    isPostsDeletable: {
      default: false,
    },
    pageSize: {
      default: 5,
    },
  },
  data() {
    return {
      pageIndex: 1,
    };
  },
  methods: {
    goToPage(page) {
      this.pageIndex = page;
    },
    goToNextPage() {
      this.pageIndex++;
    },
    goToPreviousPage() {
      this.pageIndex--;
    },
  },
  computed: {
    ...mapState(["posts"]),
    pagesCount() {
      return Math.ceil(this.posts.length / this.pageSize);
    },
  },
};
</script>