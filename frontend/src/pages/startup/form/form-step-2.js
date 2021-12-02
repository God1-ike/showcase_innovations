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

const { TextArea } = Input;

export const FormStep2 = (
  <>
    <Form.Item name='' label='Кейс использования продукта'>
      <TextArea rows={4} placeholder='Опишите кейс использования вашего продукта' />
    </Form.Item>
    <Form.Item name='' label='Польза продукта'>
      <TextArea rows={4} placeholder='Опишите пользу вашего продукта' />
    </Form.Item>
    <Form.Item label="Требуется ли сертификация продукта" name="">
        <Radio.Group>
          <Radio.Button value="1">Да, требуется сертификация и у нас она есть</Radio.Button>
          <Radio.Button value="2">Да, требуется сертификация, но  у нас ее нет</Radio.Button>
          <Radio.Button value="3">Нет, не требуется</Radio.Button>
        </Radio.Group>
      </Form.Item>
  </>
);
