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
        <p>表单：</p>
        <Form model={formData}>
          <Form.Item label='姓名'>
            <Input v-model={[formData.name, 'value']} />
          </Form.Item>
          <Form.Item label='居住地'>
            <Select value={formData.region} onChange={(value) => { console.log(value) }}>
              <Select.Option value='beijing'>{() => '北京'}</Select.Option>
              <Select.Option value='shanghai'>{() => '上海'}</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='富文本'>
            <Input value={formData.desc} onChange={(e) => { formData.desc = e.target.value; }} />
          </Form.Item>
          <Form.Item>
            <Button onClick={submit}>submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  },
})