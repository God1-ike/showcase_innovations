import { Form, Input, Radio } from 'antd';

const { TextArea } = Input;

export const FormStep2 = (
  <>
    <Form.Item name='usage' label='Кейс использования продукта'>
      <TextArea
        rows={4}
        placeholder='Опишите кейс использования вашего продукта'
      />
    </Form.Item>
    <Form.Item name='direction' label='Польза продукта'>
      <TextArea rows={4} placeholder='Опишите пользу вашего продукта' />
    </Form.Item>
    <Form.Item label='Требуется ли сертификация продукта' name='certification_requireness'>
      <Radio.Group>
        <Radio value='1'>
          Да, требуется сертификация и у нас она есть
        </Radio>
        <Radio value='2'>
          Да, требуется сертификация, но у нас ее нет
        </Radio>
        <Radio value='3'>Нет, не требуется</Radio>
      </Radio.Group>
    </Form.Item>
  </>
);


