import { defineComponent, reactive } from 'vue';
import { Button, Form, Input, Select, DatePicker, } from 'ant-design-vue';

export default defineComponent({
  setup() {

    const formData = reactive({
      name: '',
      region: '',
      birthday: '',
      desc: '',
    })

    const submit = () => {
      console.log(formData);
    }

    return () => (
      <div>
        <p>表单：这个还是有问题</p>
        <Form model={formData}>
          <Form.Item label='姓名'>
            <Input value={formData.name} onChange={(e)=>{formData.name = e.target.value}}/>
          </Form.Item>
          <Form.Item label='居住地'>
            <Select v-model={formData.region}>
              <Select.Option value='beijing'>{() => '北京'}</Select.Option>
              <Select.Option value='shanghai'>{() => '上海'}</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='富文本'>
            <Input v-model={formData.desc} />
          </Form.Item>
          <Form.Item>
            <Button onClick={submit}>submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  },
})