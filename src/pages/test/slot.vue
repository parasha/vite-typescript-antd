<template>
  <span @click='click'>slot 单文件组件：</span>
  <slot></slot>
  <slot name="name"></slot>
</template>

<script>
import { onMounted } from "vue";

export default {
  props:{
    number: Number,
  },
  setup(props, context) {
    const { attrs, emit, slots = {} } = context;

    onMounted(() => {
      console.log('sfc props:', props);
      console.log('sfc attrs:', attrs);
      console.log('sfc emit:', emit);
      console.log('sfc slots:', slots);
    });

    const click = ()=>{
      console.log('sfc click')
      emit('event')
    }
    return {
      click
    }
  },
};
</script>

<style lang="less" scoped>
</style>
