import {  Layout, PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Col, Card, Divider, Space } from 'antd';
import { HeaderContent } from './header-content.js'
import styles from './styles.module.css';
import { PhoneOutlined, MailOutlined, FileOutlined, DownloadOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const { Text } = Typography;
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const ContentR = ({ children }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
  </Row>
);

export function StartupDetails() {
  const [fetchData, setFetchData] = useState({});

  useEffect(()=>{
    fetch('http://37.143.12.141/api/startups/8')
    .then(response=>{
        if(response.ok) {
            setFetchData(response.json());
            console.log(fetchData)
        }
        console.error(response);
    })
},[])

  return (<>
    <Layout>
        <PageHeader
          offset={1}
          title="Lorem ipsum"
          className={styles.header}
          tags={<Tag color="blue">Скрининг</Tag>}
          extra={[
            <Button key="1" type="primary">
              Перевести в скоринг
            </Button>,
          ]}
          avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
          breadcrumb={{ routes }}
        >
          <ContentR>{HeaderContent}</ContentR>
        </PageHeader>

        <Row className={styles.margin_top}>
          <Col span={16} offset={1} >
            <Layout>
              <Card title="Комментарии" bordered={false}>
                <div>
                  <p>
                    <Space direction="horizontal">
                      <Text>Иванов Иван</Text>
                      <Text type="secondary">Cтартапер</Text>
                    </Space>
                  </p>

                  <p>
                    <Text type="secondary">
                      Lorem ipssum doloor sit amet
                    </Text>
                  </p>
                  <p>
                    <Text type="secondary">
                      12:22:45
                    </Text>
                  </p>
                </div>
                <Divider />
                <div>
                  <p>
                    <Space direction="horizontal">
                      <Text>Иванов Иван</Text>
                      <Text type="secondary">Cтартапер</Text>
                    </Space>
                  </p>

                  <p>
                    <Text type="secondary">
                      Lorem ipssum doloor sit amet
                    </Text>
                  </p>
                  <p>
                    <Text type="secondary">
                      12:22:45
                    </Text>
                  </p>
                </div>
              </Card>
            </Layout>
          </Col>

          <Col span={5} offset={1}>
            <Card title="Контакты" bordered={false}>
              <Meta title="Иванов Иван Иванович" description="Руководитель проекта" />
              <p className={styles.margin_top}>
                <PhoneOutlined />
                <span> +79999999 </span>
              </p>
              <p>
                <MailOutlined />
                <span> hello@example.com </span>
              </p>
              <Divider />
              <p>
                <Space direction="vertical">
                  <Text type="secondary">Юридическое наименование</Text>
                  <Text>ООО СмартДжи</Text>
                </Space>
              </p>
              <p>
                <Space direction="vertical">
                  <Text type="secondary">ИНН</Text>
                  <Text>55555555</Text>
                </Space>
              </p>
            </Card>

            <Card title="Файлы" bordered={false} className={styles.margin_top}>
              <Row justify="space-between">
                <Col>
                  <FileOutlined/>
                  <span> Файлик</span>
                </Col>
                <Col>
                  <DownloadOutlined style={{color: 'blue'}}/>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col>
                  <FileOutlined/>
                  <span> Файлик</span>
                </Col>
                <Col>
                  <DownloadOutlined style={{color: 'blue'}}/>
                </Col>
              </Row>
            </Card>

            <Card title="Теги" bordered={false} className={styles.margin_top}>
              <Tag closable>
                Tag 1
              </Tag>
              <Tag closable>
                Tag 2
              </Tag>
              <Tag closable>
                Tag 3
              </Tag>
            </Card>
          </Col>
        </Row>
    </Layout>
  </>);
}