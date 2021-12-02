import {
  Form,
  Input,
  InputNumber,
  Select
} from 'antd';

const { TextArea } = Input;

export const FormStep4 = (
  <>
    <Form.Item name='' label='Запрос к акселератору и видение пилотного проекта'>
      <TextArea rows={4} placeholder='Описание' />
    </Form.Item>
    <Form.Item name='' label='Организация Московского транспорта, интересная в первую очередь'>
        <Select>
            <Select.Option value="demo">Demo</Select.Option>
        </Select>
    </Form.Item>
    <Form.Item name='' label='Откуда узнали про акселератор'>
      <InputNumber placeholder='' />
    </Form.Item>
    <Form.Item name='' label='Технологии (необязательно)'>
      <InputNumber placeholder='Укажите количество' />
    </Form.Item>
    <Form.Item name='' label='Сегмент бизнеса (необязательно)'>
        <Select>
            <Select.Option value="B2B">B2B</Select.Option>
            <Select.Option value="B2C">B2C</Select.Option>
            <Select.Option value="B2G">B2G</Select.Option>
            <Select.Option value="B2O">B2O</Select.Option>
        </Select>
    </Form.Item>
    <Form.Item name='' label='Сферы применения (необязательно)'>
      <InputNumber placeholder='Укажите количество' />
    </Form.Item>
  </>
);
