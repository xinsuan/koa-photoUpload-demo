<template>
  <div>
    <img :src="photoInfo.imgUrl" alt="" />
    {{ photoInfo.name }}
    <button @click="back">back</button>
  </div>
</template>

<script>
export default {
  props: ["id"],

  methods: {
    back() {
      this.$router.back();
    }
  },
  computed: {
    photoInfo() {
      return this.$store.getters.getPhotoById(this.id);
    }
  }
};
</script>

<style></style>
