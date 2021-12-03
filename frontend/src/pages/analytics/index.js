import { useEffect } from 'react';

import {
  Layout,
  Input,
  Col,
  Select,
  Row,
  Tag,
  Card,
  Divider,
  Typography,
} from 'antd';
import { HOST } from '../../constants';
import styles from './styles.module.css';
const { Header } = Layout;

const grapthicData = ['by_state','by_tech_tags','by_sphere_tags','by_organization','by_segment','by_people_count'];
const request = (graph) => fetch(`${HOST}/api/stats/${graph}`);

export function Analytics() {
  useEffect(()=>{
    Promise.all(grapthicData.map(request)).then(responses=> {
      return Promise.all(responses.map(item=>{
        if(item.ok) return item.json();
        return new Error(item);
      }));
    })
    .then(console.log);
  },[]);
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h3>Аналитика</h3>
      </Header>
      <Row gutter={[24, 24]} style={{padding: 24}}>
        <Col span={12}>
          <Card
            title='Статусы стартапов'
          />
        </Col>
        <Col span={12}>
          <Card
            title='Сегмент'
          />
        </Col>
        <Col span={12}>
          <Card
            title='Организации МТ'
          />
        </Col>
        <Col span={12}>
          <Card
            title='Кличество человек в организации'
          />
        </Col>
        <Col span={24}>
          <Card
            title='Сверы применения'
          />
        </Col>
        <Col span={24}>
          <Card
            title='Технологии'
          />
        </Col>
      </Row>
    </Layout>
  );
}
