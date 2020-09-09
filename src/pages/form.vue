<template>
  <div>
    <a-upload name="file" :action="''" :headers="headers" :customRequest="goUpload">
      <a-button>
        <a-icon type="upload" />Click to Upload
      </a-button>
    </a-upload>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      headers: {
        authorization: "authorization-text"
      }
    };
  },
  methods: {
    goUpload(data) {
        const formData = new FormData()
      formData.append('file', data.file)
      console.log('formData=>',data)
      this.uploadFileResume(formData)
    },
    uploadFileResume(formData){
         this.$uploadFile(formData).then(res => {
             console.log('uploadFile=>',res)
      });
    }
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="less">
</style>
