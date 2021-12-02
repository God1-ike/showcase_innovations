import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

export const FormStep3 = (
  <>
    <Form.Item name='contact_name' label='ФИО контактного лица по заявке'>
      <Input placeholder='Константинопольский Константин Константинович' />
    </Form.Item>
    <Form.Item name='contact_rank' label='Должность контактного лица'>
      <Input placeholder='Руководитель' />
    </Form.Item>
    <Form.Item name='phone_number' label='Контактный телефон'>
      <Input placeholder='+7 999 987-65-43' />
    </Form.Item>
    <Form.Item name='email' label='Контактная почта'>
      <Input placeholder='example@mail.ru' />
    </Form.Item>
    <Form.Item name='legal_entity_title' label='Наименование юридического лица'>
      <Input placeholder='example@mail.ru' />
    </Form.Item>
    <Form.Item name='inn' label='ИНН'>
      <Input placeholder='1425346' />
    </Form.Item>
  </>
);
