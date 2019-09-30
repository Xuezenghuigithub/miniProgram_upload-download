<template>
  <div class>
    <v-btn @click="download">下载pdf到本地</v-btn>
  </div>
</template>

<script>
export default {
  name: "download",
  data() {
    return {
        filename: 'test.pdf'
    };
  },
  methods: {
    download() {
      this.$axios({
        method: "post",
        url: "/api/downloadFile",
        data: {
          filename: this.filename
        },
        responseType: "blob" // 二进制数据
      })
        .then(response => {
          this.downloadFile(response);
        })
        .catch(error => {});
    },
    downloadFile(data) {
        console.log(data);
        var _that = this;
      if (!data) {
        console.log('没数据');
        return;
      }
      let url = window.URL.createObjectURL(new Blob([data.data]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", _that.filename);

      document.body.appendChild(link);
      link.click();
    }
  }
};
</script>

<style lang="" scoped>
</style>
