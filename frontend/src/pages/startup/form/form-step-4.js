import {
  Form,
  Input,
  InputNumber,
  Select
} from 'antd';

const { TextArea } = Input;

export const FormStep4 = (
  <>
    <Form.Item name='request_for_accelerator' label='Запрос к акселератору и видение пилотного проекта'>
      <TextArea rows={4} placeholder='Описание' />
    </Form.Item>
    <Form.Item name='organization_transport' label='Организация Московского транспорта, интересная в первую очередь'>
        <Select>
            <Select.Option value="moscow_metro">Московский метрополитен</Select.Option>
            <Select.Option value="mosgortrans">Мосгортранс</Select.Option>
            <Select.Option value="transportation_organizer">ЦОДД</Select.Option>
            <Select.Option value="demo">Организатор перевозок</Select.Option>
            <Select.Option value="mostransproject">Мостранспроект</Select.Option>
            <Select.Option value="ampp">АМПП</Select.Option>
        </Select>
    </Form.Item>
    <Form.Item name='knowledge_source' label='Откуда узнали про акселератор'>
      <InputNumber placeholder='' />
    </Form.Item>
    <Form.Item name='technologies_used' label='Технологии (необязательно)'>
      <InputNumber placeholder='Укажите количество' />
    </Form.Item>
    <Form.Item name='business_segment' label='Сегмент бизнеса (необязательно)'>
        <Select>
            <Select.Option value="B2B">B2B</Select.Option>
            <Select.Option value="B2C">B2C</Select.Option>
            <Select.Option value="B2G">B2G</Select.Option>
            <Select.Option value="B2O">B2O</Select.Option>
        </Select>
    </Form.Item>
    <Form.Item name='usage_area' label='Сферы применения (необязательно)'>
      <InputNumber placeholder='Укажите количество' />
    </Form.Item>
  </>
);
