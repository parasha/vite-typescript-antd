import { defineComponent, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import HelloWorld from '/@/components/HelloWorld.vue';
import echarts from 'echarts';
import lodash from 'lodash';


export default defineComponent({
  name: 'User',
  setup() {

    onMounted(() => {
      console.log('lodash', lodash)
      console.log('charts', lodash)
    })

    return () => (
      <div>
        User page
        <br />
        <RouterLink to='/home'>to Home</RouterLink>
        <br />
        <HelloWorld />
      </div>
    )
  }
})