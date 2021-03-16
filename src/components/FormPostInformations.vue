<template>
  <form @submit.prevent="submit">
    <div class="d-flex">
      <div class="w-75">
        <input-text label="Title de la page" v-model="form.title" />
        <input-text label="Slug de la page" v-model="form.slug" />
        <input-text label="Meta title" v-model="form.meta_title" />
        <input-text label="Meta description" v-model="form.meta_desc" />
        <input-text label="Image de la page" v-model="form.image_url" />
      </div>
      <div class="w-25 d-flex justify-content-center align-items-center">
        <img
          :src="form?.image_url"
          :alt="form?.meta_title"
          style="width: 13rem; height: 13rem; object-fit: cover"
          class="rounded-circle overflow-hidden border"
        />
      </div>
    </div>

    <input-textarea label="Corps de la page" v-model="form.content" />

    <div class="d-flex justify-content-end">
      <button-custom type="submit" v-if="post">Modifier la page</button-custom>
      <button-custom type="submit" v-else>Créer la page</button-custom>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import ButtonCustom from "@/components/ButtonCustom";
import InputText from "@/components/InputText";
import InputTextarea from "@/components/InputTextarea";

export default {
  props: {
    post: {},
  },
  components: {
    ButtonCustom,
    InputText,
    InputTextarea,
  },
  data() {
    return {
      form: {
        title: this.post?.title ? this.post.title : "",
        slug: this.post?.slug ? this.post.slug : "",
        meta_title: this.post?.meta_title ? this.post.meta_title : "",
        meta_desc: this.post?.meta_desc ? this.post.meta_desc : "",
        image_url: this.post?.image_url
          ? this.post.image_url
          : "https://via.placeholder.com/160x160/",
        content: this.post?.content ? this.post.content : "",
      },
    };
  },
  methods: {
    ...mapActions(["createPost", "updatePost"]),
    submit() {
      this.post ? this.update() : this.create();
    },
    verifyInputs() {
      //
      //
      //
      //
      //
      return true;
    },
    create() {
      if (this.verifyInputs()) {
        this.createPost(this.form);
        this.$router.push({ name: "admin" });
      }
    },
    update() {
      if (this.verifyInputs()) {
        this.updatePost(this.post.slug, this.form);
        this.$router.push({ name: "admin" });
      }
    },
  },
};
</script>