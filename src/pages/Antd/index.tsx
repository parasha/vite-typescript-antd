import { defineComponent, onMounted } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'Antd',
  setup() {

    onMounted(() => {
      console.log('ant-design-view')
    })

    return () => (
      <div>
        <p>Ant-design-vue 组件</p>
        <RouterView />
      </div>
    )
  }
})