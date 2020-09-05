import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'User',
  setup() {
    return () => (
      <div>
        User page
        <br/>
        <RouterLink to='/home'>to Home</RouterLink>
      </div>
    )
  }
})