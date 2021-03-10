<template>
  <div class="d-flex flex-column align-items-center">
    <post-card
      v-for="(post, index) in posts.slice(
        pageSize * (pageIndex - 1),
        pageSize * (pageIndex - 1) + pageSize
      )"
      :key="index"
      :isEditable="isPostsEditable"
      :post="post"
      class="mb-3"
    />
    <div class="row">
      <button
        v-if="pageIndex > 1"
        @click="goToPreviousPage"
        class="btn btn-link"
      >
        &lt;
      </button>
      <button
        v-for="page in pagesCount"
        :key="page"
        @click="goToPage(page)"
        class="btn btn-link"
      >
        {{ page }}
      </button>
      <button
        v-if="pageIndex < pagesCount"
        @click="goToNextPage"
        class="btn btn-link"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import { mapState } from "vuex";

export default {
  props: {
    isPostsEditable: {
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
  components: {
    PostCard,
  },
};
</script>