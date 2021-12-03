import { useEffect, useState, createRef } from 'react';
import { Layout, Col, Row, Card } from 'antd';
import { VictoryPie, VictoryLabel } from 'victory';
import { HOST } from '../../constants';
import styles from './styles.module.css';
const { Header } = Layout;

const grapthics = [
  {
    type: 'by_state',
    title: 'Статусы стартапов',
    data: {},
    span: 12,
  },
  {
    type: 'by_segment',
    title: 'Сегмент',
    data: {},
    span: 12,
  },
  {
    type: 'by_organization',
    title: 'Организации МТ',
    data: {},
    span: 12,
  },
  {
    type: 'by_people_count',
    title: 'Количество человек в организации',
    data: {},
    span: 12,
  },
  {
    type: 'by_sphere_tags',
    title: 'Сверы применения',
    data: {},
    span: 24,
  },
  {
    type: 'by_tech_tags',
    title: 'Технологии',
    data: {},
    span: 24,
  },
];

const request = (graph) => fetch(`${HOST}/api/stats/${graph.type}`);

export function Analytics() {
  const [graphicsData, setGraphics] = useState([]);
  const refs = grapthics.reduce(
    (res, item) => ({ ...res, [item.type]: createRef() }),
    {}
  );
  console.log(refs);
  useEffect(() => {
    Promise.all(grapthics.map(request))
      .then((responses) => {
        return Promise.all(
          responses.map((item) => {
            if (item.ok) return item.json();
            return new Error(item);
          })
        );
      })
      .then(setGraphics);
  }, []);
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h3>Аналитика</h3>
      </Header>
      <Row gutter={[24, 24]} style={{ padding: 24 }}>
        {grapthics.map((item) => {
          return (
            <Col key={item.type} span={item.span}>
              <Card title={item.title}>
              <svg viewBox="0 0 400 400">
                <VictoryPie
                  standalone={false}
                  width={400} height={400}
                  data={[
                    { x: 1, y: 2 }, { x: 2, y: 5 }, { x: 3, y: 10 }
                  ]}
                  innerRadius={68} labelRadius={100}
                  style={{ labels: { fontSize: 20, fill: "white" } }}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20 }}
                  x={200} y={200}
                  text=""
                />
              </svg>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
}
