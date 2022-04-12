<template>
  <transition name="fadeIn">
    <template v-if="$route.meta.keepAlive">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </transition>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    if (process.env.NODE_ENV === "development") {
      window.app = this;
    }
    console.log(process.env.NODE_ENV);
    console.log(ENV_CONFIG);
  },
};
</script>
<style lang="scss" scoped></style>
