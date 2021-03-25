<template>
  <div>
    <!-- 展示相关 -->
    <div class="container">
      <div class="photoHeader">
        <div class="imgContainer">
          <img class="photoName" src="public/img/1.jpg" />
        </div>
        <div class="btnContainer">
          <span class="photoTitle">相册名称</span>
          <button class="mybtn" @click="showUploadView = true">上传照片</button>
        </div>
      </div>

      <div class="photoContainer">
        <template v-for="item in photos">
          <router-link :key="item.key" :to="{ path: `/detail/${item.id}` }">
            <div class="photoItem">
              <img :src="item.imgUrl" />
              <span>
                {{ item.name }}
              </span>
            </div>
          </router-link>
        </template>
      </div>
    </div>
    <!-- 上传相关 -->
    <upload-view :visible.sync="showUploadView"></upload-view>
  </div>
</template>

<script>
import UploadView from "../components/UploadView";
export default {
  components: {
    UploadView
  },
  created() {
    this.$store.dispatch("getPhotos");
  },
  data() {
    return {
      showUploadView: false
    };
  },
  computed: {
    photos() {
      return this.$store.state.photos;
    }
  }
};
</script>

<style></style>
