<template>
  <div class="masking" v-show="visible">
    <div class="addPhotoContainer"></div>
    <div class="addController">
      <h3 class="addTitle">
        上传照片-普通上传(H5)<span class="close" @click="closeView">╳</span>
      </h3>
      <div class="photoTitles">
        <span class="uploadTo">上传到</span>
        <div class="photoSelect">
          <img class="showPhoto" src="public/img/1.jpg" />
          相册名称
        </div>
      </div>

      <!-- 上传按钮 -->
      <div class="showContainer" v-show="showUploadView">
        <div class="uploadContainer">
          <span class="fileinput-button">
            <span>上传图片</span>
            <input
              class="imgFile"
              type="file"
              name=""
              multiple="multiple"
              @input="updateImg"
            />
          </span>
          <span class="hint">
            按住Ctrl可多选
          </span>
        </div>
      </div>

      <!-- 显示待上传图片  -->
      <div class="loadContainer" v-show="showWantUploadView">
        <div class="wantUpload">
          <!-- <div class="uploadPhotoItem">
            <span class="myProgress">
              <span class="plan"></span>
              30%
            </span>
            <img src="public/img/1.jpg" />
            <span class="pictureName">
              home
            </span>
          </div> -->
          <template v-for="(item, index) in wantPhotos">
            <upload-photo-item :item="item" :key="index"></upload-photo-item>
          </template>
        </div>
        <div class="addStyle">
          <!-- <span class="fileinput-add">
            <span></span>
            <input class="imgFile-add" type="file" multiple="multiple" />
          </span> -->
        </div>
        <!-- 开始上传按钮 -->
        <div class="bottomStyle">
          <span class="uploadBtn" @click="starUpload">开始上传</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiUpload } from "../api";
import UploadPhotoItem from "./UploadPhotoItem.vue";
export default {
  props: ["visible"],
  components: {
    UploadPhotoItem
  },
  data() {
    return {
      wantPhotos: []
    };
  },
  computed: {
    showUploadView() {
      return this.wantPhotos.length === 0;
    },
    showWantUploadView() {
      return this.wantPhotos.length > 0;
    }
  },
  methods: {
    async starUpload() {
      for (const photo of this.wantPhotos) {
        await apiUpload(photo);
      }
      // 获取到图片全部上传成功后的点
      // 写好代码
      // 1. 表达好代码的意图
      this.uploadCompleted();
    },
    uploadCompleted() {
      this.wantPhotos = [];
      this.$store.dispatch("getPhotos");
    },
    closeView() {
      // sync
      // 关闭父级上传视图
      this.$emit("update:visible", false);
    },
    updateImg(e) {
      console.log(e.target.files);

      this.wantPhotos.push(...Array.from(e.target.files));
      console.log(this.wantPhotos);
    }
  }
};
</script>

<style></style>
