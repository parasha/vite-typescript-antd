import { defineComponent } from 'vue';
import { Table } from 'ant-design-vue';

const { Column, ColumnGroup } = Table;

const tableData = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
},
{
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
},
{
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},]

export default defineComponent({
  name: 'Antd-Table',
  setup() {

    return () => (
      <Table dataSource={tableData}>
        <Column title='First Name' dataIndex='firstName' />
        <Column title='Last Name' dataIndex='lastName' />
        <Column title='Age' dataIndex='age' />
        <Column title='Address' dataIndex='address' />
      </Table>
    )
  },
});