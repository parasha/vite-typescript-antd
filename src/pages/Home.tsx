import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <div>
        Home page
        <br/>
        <RouterLink to='/user'>to User</RouterLink>
      </div>
    )
  }
})