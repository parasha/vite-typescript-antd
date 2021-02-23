import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import style from './index.module.less';

export default defineComponent({
  setup() {

    return () => (
      <div id={style.account} class="flex">
        <div class={style['account-window'] + ' flex'}>
          <RouterView />
        </div>
      </div>
    )
  }
})