import { Form, Input, InputNumber } from 'antd';

const { TextArea } = Input;

export const FormStep1 = (
  <>
    <Form.Item name='title' label='Наименование команды/организации'>
      <Input placeholder='Super Startup' />
    </Form.Item>
    <Form.Item name='description' label='Краткое описание продукта'>
      <TextArea rows={4} placeholder='Опишите ваш продукт' />
    </Form.Item>
    <Form.Item name='people_count' label='Количество человек в организации'>
      <InputNumber placeholder='Укажите количество' />
    </Form.Item>
    <Form.Item name='' label='Стадия готовности продукта'>
        <Select>
            <Select.Option value="Идея">Идея</Select.Option>
            <Select.Option value="Прототип">Прототип</Select.Option>
            <Select.Option value="Продукт">Продукт</Select.Option>
        </Select>
    </Form.Item>
    <Form.Item name='presentation_url' label='Ссылка на презентацию'>
      <Input placeholder='https://mypresentation.ru' />
    </Form.Item>
    <Form.Item name='site_url' label='Сайт'>
      <Input placeholder='https://example.ru' />
    </Form.Item>
  </>
);


