import { defineComponent } from 'vue';
import SlotChild from './slot.vue';

export default defineComponent({
  name: 'Test',
  setup() {
    return () => (
      <div>
        Test
        <br />
        <SlotChild>{{default:()=>(<span>default slot</span>)}}</SlotChild>
      </div>
    )
  }
})