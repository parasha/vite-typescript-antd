<template>
  <div class="page-sfc" v-my-directive="{ a: 1 }">单页面组件</div>
</template>

<script>
import {} from "vue";

export default {
  setup() {},
};
</script>

<style lang="less" scoped>
.page-sfc {
  color: blue;
}
</style>
