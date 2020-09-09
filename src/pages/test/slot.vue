<template>
  slot child:
  <slot></slot>
  <slot name='name'></slot>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup(props, context) {
    onMounted(()=>{
      console.log('context:', context)
    })
  },
};
</script>

<style lang="less" scoped>
</style>
