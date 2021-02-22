import { defineComponent, reactive } from 'vue';
import { Button, Form, Input, Select, DatePicker, } from 'ant-design-vue';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';

export default defineComponent({
  setup() {
    console.log(locale)
    const formData = reactive({
      name: '',
      region: '',
      birthday: null,
      desc: '',
    })

    const submit = () => {
      console.log(formData);
    }

    return () => (
      <div>
        <Form model={formData}>
          <Form.Item label='姓名'>
            <Input value={formData.name} onChange={e=>formData.name = e.target.value}/>
          </Form.Item>
          <Form.Item label='居住地'>
            <Select value={formData.region} onChange={(value: string) => { formData.region = value }}>
              <Select.Option value='beijing'>{() => '北京'}</Select.Option>
              <Select.Option value='shanghai'>{() => '上海'}</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='生日'>
            <DatePicker locale={locale} value={formData.birthday} onChange={(date, dateString) => { formData.birthday = date }}></DatePicker>
          </Form.Item>
          <Form.Item label='富文本'>
            <Input value={formData.desc} onChange={(e) => { formData.desc = e.target.value }} />
          </Form.Item>
          <Form.Item>
            <Button onClick={submit}>submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  },
})