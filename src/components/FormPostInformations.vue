<template>
  <form @submit.prevent="submit">
    <div class="d-flex">
      <div class="w-75">
        <input-text
          label="Title de la page"
          v-model="form.title"
          required
          :disabled="!isNew"
        />
        <input-text
          label="Slug de la page"
          v-model="form.slug"
          required
          pattern="^[a-z0-9\-]+$"
          :disabled="!isNew"
        />
        <input-text label="Meta title" v-model="form.meta_title" required />
        <input-text
          label="Meta description"
          v-model="form.meta_desc"
          required
        />
        <input-text label="Image de la page" v-model="form.image_url" />
      </div>
      <div class="w-25 d-flex justify-content-center align-items-center">
        <img
          :src="form?.image_url"
          :alt="form?.meta_title"
          style="width: 150px; height: 150px; object-fit: cover"
          class="rounded-circle overflow-hidden border bg-light"
        />
      </div>
    </div>

    <input-textarea label="Corps de la page" v-model="form.content" required />

    <div class="d-flex justify-content-end">
      <button-custom type="submit" v-if="isNew">Créer la page</button-custom>
      <button-custom type="submit" v-else>Modifier la page</button-custom>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ButtonCustom from "@/components/ButtonCustom";
import InputText from "@/components/InputText";
import InputTextarea from "@/components/InputTextarea";

export default {
  props: {
    slug: null,
  },
  components: {
    ButtonCustom,
    InputText,
    InputTextarea,
  },
  data() {
    return {
      form: {
        title: "",
        slug: "",
        meta_title: "",
        meta_desc: "",
        image_url: "",
        content: "",
      },
      isNew: true,
    };
  },
  mounted() {
    this.isNew = this.slug == null;
    if (!this.isNew) {
      this.initPost();
    }
  },
  methods: {
    ...mapActions(["createPost", "updatePost"]),
    ...mapState({
      initPost(state) {
        const index = state.posts.findIndex((post) => post.slug == this.slug);
        const post = state.posts[index];

        this.form.title = post.title;
        this.form.slug = post.slug;
        this.form.meta_title = post.meta_title;
        this.form.meta_desc = post.meta_desc;
        this.form.image_url = post.image_url;
        this.form.content = post.content;
      },
    }),
    submit() {
      this.isNew ? this.create() : this.update();
    },
    verifyInputs() {
      if (
        this.form.title != "" &&
        this.form.slug != "" &&
        this.form.meta_title != "" &&
        this.form.meta_desc != "" &&
        this.form.content != ""
      ) {
        if (this.form.image_url == "") {
          this.form.image_url = "https://via.placeholder.com/160x160/";
        }
        return true;
      }
      return false;
    },
    create() {
      if (this.verifyInputs()) {
        this.createPost(this.form);
        this.$router.go(-1);
      }
    },
    update() {
      if (this.verifyInputs()) {
        this.updatePost({ slug: this.slug, post: this.form });
      }
    },
  },
};
</script>