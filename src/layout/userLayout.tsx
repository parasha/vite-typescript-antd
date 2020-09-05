import { defineComponent, onMounted } from 'vue';
import { RouterView, useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();

    onMounted(() => {
      console.log('mounted: route-', route);
      console.log('mounted: store-', store);
    })

    onBeforeRouteUpdate((to, from, next) => {
      console.log('before route update');
      next();
    })

    return () => (
      <>
        用户身份校验:
        < RouterView />
      </>
    )
  }
})