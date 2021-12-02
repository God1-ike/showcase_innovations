import {
  Form,
  Input,
  Radio
} from 'antd';

const { TextArea } = Input;

export const FormStep2 = (
  <>
    <Form.Item name='usage' label='Кейс использования продукта'>
      <TextArea rows={4} placeholder='Опишите кейс использования вашего продукта' />
    </Form.Item>
    <Form.Item name='direction' label='Польза продукта'>
      <TextArea rows={4} placeholder='Опишите пользу вашего продукта' />
    </Form.Item>
    <Form.Item name="certification_requireness" label="Требуется ли сертификация продукта">
        <Radio.Group>
          <Radio.Button value="1">Да, требуется сертификация и у нас она есть</Radio.Button>
          <Radio.Button value="2">Да, требуется сертификация, но  у нас ее нет</Radio.Button>
          <Radio.Button value="3">Нет, не требуется</Radio.Button>
        </Radio.Group>
      </Form.Item>
  </>
);
