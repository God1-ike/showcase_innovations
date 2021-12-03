import {  Layout, PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Col, Card, Divider, Space } from 'antd';
import { HeaderContent } from './header-content.js'
import styles from './styles.module.css';
import { PhoneOutlined, MailOutlined, FileOutlined, DownloadOutlined, CommentOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'

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

export function StartupDetails(params) {
  const [fetchData, setFetchData] = useState({title: '', tags: []});

  useEffect(()=>{
    fetch(`http://37.143.12.141/api/startups/${params.params.id}`)
    .then(response => response.json())
    .then(response=>{
        setFetchData(response)
    })
},[])

  return (<>
    <Layout>
        <PageHeader
          offset={1}
          title={fetchData.title}
          className={styles.header}
          tags={<Tag color="blue">{fetchData.state}</Tag>}
          extra={[
            <Button key="1" type="primary">
              Перевести в скоринг
            </Button>,
          ]}
          avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
          breadcrumb={{ routes }}
        >
          <ContentR><HeaderContent fetchData={fetchData}/></ContentR>
        </PageHeader>

        <Row className={styles.margin_top}>
          <Col span={16} offset={1} >
            <Layout>
              <Card title="Пилоты" bordered={false} className={styles.pilot_space}>
                <Space size={[3,5]} align='center'  wrap>
                  {
                    fetchData.pilots?.map(
                      (pilot) =>
                        <Card style={{flex: 1}}>
                          <div>
                            <p>
                              <Space direction="horizontal">
                                <Text>{pilot.name}</Text>
                              </Space>
                            </p>

                            <p>
                              <Space direction="horizontal">
                                <Text type="secondary">
                                  Стадия готовности
                                </Text>
                                <Text>
                                  {pilot.state}
                                </Text>
                              </Space>
                            </p>
                            <p>
                              <Space direction="horizontal">
                                <Text type="secondary">
                                  Человек в организации
                                </Text>
                                <Text>
                                  {fetchData.people_count}
                                </Text>
                              </Space>
                            </p>
                            <p>
                              <Space direction="horizontal">
                                <Text type="secondary">
                                  Сегмент рынка
                                </Text>
                                <Text>
                                  {  ['B2B', 'B2C', 'B2G', 'B2O'][Math.floor(Math.random() * 3)] }
                                </Text>
                              </Space>
                            </p>
                          </div>
                        </Card>
                    )
                  }
                </Space>
              </Card>

              <Card title="Комментарии" bordered={false} className={styles.margin_top}>
                {
                  fetchData.comments?.map(
                    (comment) =>
                      <>
                        <div>
                          <p>
                            <Space direction="horizontal">
                              <Text>{comment.author}</Text>
                              <Text type="secondary">Cтартапер</Text>
                            </Space>
                          </p>

                          <p>
                            <Text type="secondary">
                              {comment.description}
                            </Text>
                          </p>
                          <p>
                            <Text type="secondary">
                              12:22:45
                            </Text>
                          </p>
                        </div>
                        <Divider />
                      </>
                  )
                }
              </Card>
            </Layout>
          </Col>

          <Col span={5} offset={1}>
            <Card title="Контакты" bordered={false}>
              <Meta title={fetchData.contact_name} description={fetchData.contact_rank} />
              <p className={styles.margin_top}>
                <PhoneOutlined />
                <span> {fetchData.phone_number} </span>
              </p>
              <p>
                <MailOutlined />
                <span> {fetchData.email} </span>
              </p>
            </Card>

            <Card title="Файлы" bordered={false} className={styles.margin_top}>
              <Row justify="space-between">
                <Col>
                  <FileOutlined/>
                  <span> Презентация</span>
                </Col>
                <Col>
                  <DownloadOutlined style={{color: 'blue'}}/>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col>
                  <FileOutlined/>
                  <span> Анализ рынка</span>
                </Col>
                <Col>
                  <DownloadOutlined style={{color: 'blue'}}/>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col>
                  <FileOutlined/>
                  <span> Финансовый отчет</span>
                </Col>
                <Col>
                  <DownloadOutlined style={{color: 'blue'}}/>
                </Col>
              </Row>
            </Card>

            <Card title="Теги" bordered={false} className={styles.margin_top}>
              {
                fetchData.tags?.map(
                  (tag) =>
                  <Tag closable>
                    {tag.name}
                  </Tag>
                )
              }
            </Card>

            <Card title="Ссылки" bordered={false} className={styles.margin_top}>
              <Row justify="space-between">
                <Col>
                  <CommentOutlined/>
                  <a><span> https://t.me/@project/</span></a>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
    </Layout>
  </>);
}