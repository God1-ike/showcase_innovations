import { useState } from 'react';
import { useLocation } from 'wouter';
import { Layout, Steps, Form, Button } from 'antd';
import { FormStep1 } from './form-step-1';
import { FormStep2 } from './form-step-2';
import { FormStep3 } from './form-step-3';
import { FormStep4 } from './form-step-4';
import styles from './styles.module.css';
import { HOST } from '../../../constants';

const { Header, Content } = Layout;
const { Step } = Steps;

export function StartupForm() {
  const [step, setStep] = useState(0);
  const [_, setLocation] = useLocation();
  const [form] = Form.useForm();
  const onChangeStep = (step) => {
    setStep(step);
  };

  const onFinish = (values) => {
    fetch(`${HOST}/api/startups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ startup: values }),
    })
    .then(response=>{
      if (response.ok) {
        setLocation('/success-send');
      }
      console.error(response);
    });
  };

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>Заявка на участие</Header>
      <Content className={styles.content}>
        <Steps current={step} onChange={onChangeStep} className={styles.steps}>
          <Step title='Общая информация' />
          <Step title='Продукт' />
          <Step title='Контакты' />
          <Step title='Дополнительно' />
        </Steps>
        <Form
          form={form}
          name='startup'
          onFinish={onFinish}
          onFinishFailed={onFinish}
          className={styles.form}
          layout={'vertical'}>
          <div className={step === 0 ? '' : 'visually-hidden'}>{FormStep1}</div>
          <div className={step === 1 ? '' : 'visually-hidden'}>{FormStep2}</div>
          <div className={step === 2 ? '' : 'visually-hidden'}>{FormStep3}</div>
          <div className={step === 3 ? '' : 'visually-hidden'}>{FormStep4}</div>
          {step > 0 && (
            <Button onClick={() => onChangeStep(step - 1)}>Назад</Button>
          )}
          {step < 3 ? (
            <Button type='primary' onClick={() => onChangeStep(step + 1)}>
              Далее
            </Button>
          ) : (
            <Button type='primary' htmlType='submit'>
              Отправить
            </Button>
          )}
        </Form>
      </Content>
    </Layout>
  );
}
