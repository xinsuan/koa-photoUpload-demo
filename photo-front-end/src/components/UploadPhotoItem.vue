<template>
  <div class="uploadPhotoItem">
    <span class="myProgress">
      <span class="plan"></span>
      30%
    </span>
    <img :src="imgUrl" />
    <span class="pictureName">
      {{ item.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      imgUrl: ""
    };
  },
  created() {
    // 服务器的地址 怎么在前端显示出图片呢？
    // 转为base64
    // 为了把 file 对象转换成 base64
    const fileRender = new FileReader();
    // 数据加载过程是异步的，故最后的代码会先执行了
    fileRender.onload = () => {
      // baseUrl
      this.imgUrl = fileRender.result;
    };
    // 异步的
    fileRender.readAsDataURL(this.item);

    console.log(this.item);
  }
};
</script>

<style></style>
