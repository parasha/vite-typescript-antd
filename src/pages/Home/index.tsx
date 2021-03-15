import { defineComponent } from 'vue';
import { Card, Alert, List } from 'ant-design-vue';
import style from './index.module.less';

export default defineComponent({
  name: 'Home',
  setup() {
    console.log('home page mount');
    return () => (
      <div class={style['home-page']}>
        <div class="page-title">Vite  Demo</div>
        <Alert type="success" show-icon message="Vite 是个好文明" style={{marginBottom: '30px'}}/>
        <Card title='依赖项'>
          <List>
            <List.Item>vue 3</List.Item>
            <List.Item>vuex 4</List.Item>
            <List.Item>vue-router 4</List.Item>
            <List.Item>typescript</List.Item>
            <List.Item>Ant-design-vue 2.x</List.Item>
            <List.Item>echarts</List.Item>
          </List>
        </Card>
      </div>
    )
  }
})