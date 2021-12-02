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


import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<FormSizeDemo />, mountNode);