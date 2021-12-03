import { useEffect, useState } from 'react';
import { Layout, Input, Col, Select, Row, Button, Delimiter, Card } from 'antd';
import styles from './styles.module.css';
const { Search } = Input;

const { Header, Content } = Layout;

export function ProjectList() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h3>Стартапы</h3>
        <div className={styles.search}>
          <Search
            placeholder='Введите название стартапа'
            allowClear
            enterButton='Поиск'
            onSearch={console.log}
          />
        </div>
      </Header>
      <div className={styles.row}>
        <Row gutter={16}>
          <Col>
            <Select placeholder='Стадия готовности' optionFilterProp='children'>
              <Select.Option value='Идея'>Идея</Select.Option>
              <Select.Option value='Прототип'>Прототип</Select.Option>
              <Select.Option value='Продукт'>Продукт</Select.Option>
            </Select>
          </Col>
          <Col>
            <Select
              placeholder='Организация МТ'
              optionFilterProp='children'></Select>
          </Col>
          <Col>
            <Select
              placeholder='Человек в организации'
              optionFilterProp='children'></Select>
          </Col>
          <Col>
            <Select
              placeholder='Сегменты рынка'
              optionFilterProp='children'></Select>
          </Col>
        </Row>
        <Row gutter={8} style={{marginTop: 16}}>
          <Col><Button size='small'>Полезный продукт</Button></Col>
          <Col><Button size='small'>Уникальный продукт</Button></Col>
          <Col><Button size='small'>Трафик</Button></Col>
          <Col><Button size='small'>Пробки</Button></Col>
        </Row>
      </div>
      <Content className={styles.content}>
        {Array(5).fill({
          title:'Ant Design Pro',
          readiness: 'Проект',
          organization: 'Московский метрополитен',
          people_count: 'От 20 до 100',
          business_segment: 'B2B',
        }).map(item=>(
          <Card
            title={'Стартап'}

          >

          </Card>
        ))}
      </Content>
    </Layout>
  );
}

