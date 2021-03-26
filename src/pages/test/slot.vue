<template>
  <span @click='click'>slot 单文件组件：</span>
  <slot></slot>
  <slot name="name"></slot>
  <hr>
  <p>title: {{title}}</p>
  <model-input v-model:title='title'/>
</template>

<script>
import { onMounted, ref } from "vue";
import ModelInput from './model';

export default {
  components: {
    ModelInput,
  },
  props:{
    number: Number,
  },
  setup(props, context) {
    const { attrs, emit, slots = {} } = context;
    const title = ref('一行标题');

    onMounted(() => {
      console.log('sfc props:', props);
      console.log('sfc attrs:', attrs);
      console.log('sfc emit:', emit);
      console.log('sfc slots:', slots);
      console.log('sfc ref:', title);
    });

    const click = ()=>{
      console.log('sfc click')
      emit('event')
    }
    return {
      click,
      title
    }
  },
};
</script>

<style lang="less" scoped>
</style>
