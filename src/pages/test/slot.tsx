import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Test-slot',
  props: {
    name: String,
    number: Number,
    onEvent: Function,
  },
  setup(props, context) {

    const { attrs, emit, slots = {} } = context;

    onMounted(() => {
      console.log('props:', props);
      console.log('attrs:', attrs);
      console.log('emit:', emit);
      console.log('slots:', slots);
    })

    const click = () => {
      console.log('tsx click')
      emit('event')
    }

    return () => (
      <>
        <p onClick={click}>slot tsx：</p>
        <p>slot 标签：<slot></slot>、<slot name='name'></slot></p>
        <p>context.slot：{slots.default && slots.default()}、{slots.name && slots.name()}</p>
      </>
    )
  }
})