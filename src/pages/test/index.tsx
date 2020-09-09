import { defineComponent } from 'vue';
import SlotChild from './slot';
import SlotChildSfc from './slot.vue';


export default defineComponent({
  name: 'Test',
  setup() {
    return () => (
      <div>
        只有在子组件中声明了 props ， 才会作为 props 传入
        <hr/>
        <SlotChildSfc  name='sfc slot' number={1} onEvent={() => { console.log('slot sfc parent click') }}>
          {{ default: () => (<span>default slot</span>), name: () => (<span>name slot</span>) }}
        </SlotChildSfc>
        <hr/>
        <SlotChild name='slot' number={1} onEvent={() => { console.log('slot parent click') }}>
          {{ default: () => (<span>default slot</span>), name: () => (<span>name slot</span>) }}
        </SlotChild>
      </div>
    )
  }
})