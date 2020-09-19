import { defineComponent, reactive, toRaw } from 'vue';
import { Form, Input, Select } from 'ant-design-vue';
import { useForm } from '@ant-design-vue/use'; // es module 导出有问题

export default defineComponent({
  name: 'Antd-UseForm',
  setup() {
    // 原始的表单数据
    const modelRef = reactive({
      name1: '',
      name2: '111',
      obj: {
        //嵌套数据
        test: [],
      },
    });
    // 表单校验规则
    const rulesRef = reactive({
      name1: [
        {
          required: true,
          message: 'Please input Activity name',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      name2: [
        {
          required: true,
          message: 'Please input name2',
        },
      ],
      'obj.test': [
        {
          required: true,
          message: 'Please select',
          type: 'array',
        },
      ],
    });
    // useForm
    console.log('useForm:',useForm)
    // const _useForm = useForm(modelRef, rulesRef);
    // console.log('useFomr result:', _useForm);
    /**
     * resetFields: 表单重置
     * 
     */
    // const { resetFields, validate, validateInfos, mergeValidateInfo } = _useForm;
    // console.log('mergeValidateInfo:', mergeValidateInfo(validateInfos.name1, validateInfos.name2))

    // const handleClick = e => {
    //   e.preventDefault();
    //   validate()
    //     .then(() => {
    //       console.log('toRaw:',toRaw(modelRef));
    //     })
    //     .catch(err => {
    //       console.log('error', err);
    //     });
    // };
    // const handleReset = e => {
    //   e.preventDefault();
    //   resetFields();
    // };
    return () => (
      <div>useForm</div>
      // <Form>
      //   <Form.Item
      //     label="Activity name1"
      //     {...mergeValidateInfo(validateInfos.name1, validateInfos.name2)}
      //   >
      //     <Input v-model={[modelRef.name1, 'value']} onBlur={() => validate('name1')} />
      //   </Form.Item>
      //   <Form.Item label="Activity name2" {...validateInfos.name2}>
      //     <Input v-model={[modelRef.name2, 'value']} />
      //   </Form.Item>
      //   <Form.Item label="test" {...validateInfos['obj.test']}>
      //     <Select
      //       v-model={[modelRef.obj.test, 'value']}
      //       mode="multiple"
      //       onBlur={console.log}
      //       onFocus={console.log}
      //     >
      //       <Select.Option value="china">
      //         <span role="img" aria-label="China">
      //           🇨🇳
      //         </span>
      //         China (中国)
      //       </Select.Option>
      //       <Select.Option value="usa">
      //         <span role="img" aria-label="USA">
      //           🇺🇸
      //         </span>
      //         USA (美国)
      //       </Select.Option>
      //     </Select>
      //   </Form.Item>
      //   <button onClick={handleClick}>submit</button>
      //   <button onClick={handleReset}>reset</button>
      // </Form>
    );
  },
})