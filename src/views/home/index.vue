<template>
  <div class="home" >
    <!-- <microdoneH5></microdoneH5> -->
    密码键盘：<input type="text" @focus="microBlur" id="kb1">
  </div>
</template>
<script>
// import microdoneH5 from 'components/microdoneH5';
export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
      // microdoneH5
  },
  mounted() {},
  watch: {},
  methods:{
    microBlur(){
      console.log(111)
      this.$microdoneH5('kb1',1)
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
