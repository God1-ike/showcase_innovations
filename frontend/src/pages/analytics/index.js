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
    data: [{x: 'Идея', y: 10}, {x: 'Продукт', y: 2}, {x: 'Прототип', y: 15}],
    span: 12,
  },
  {
    type: 'by_segment',
    title: 'Сегмент',
    data: [{x:'B2B', y: 11}, {x:'B2C', y: 12}, {x:'B2G', y: 1}, {x:'B2O', y: 6}],
    span: 12,
  },
  {
    type: 'by_organization',
    title: 'Организации МТ',
    data: [{x: 'Московский метрополитен', y: 23}, {x: 'Мосгорстранс', y: 12}, {x:'ЦОДД', y: 23}, {x:'Организатор перевозок', y: 23}, {x: "Мостранспроект", y: 10}],
    span: 12,
  },
  {
    type: 'by_people_count',
    title: 'Количество человек в организации',
    data: [{ x: '0-10', y: 70 }, { x: '10-20', y: 40 }, { x: "20-100", y: 10 }, { x: '>100', y: 5}],
    span: 12,
  },
  {
    type: 'by_sphere_tags',
    title: 'Сферы применения',
    data: [{ x: 'Транспортные системы', y: 60 }, { x: 'Доступная среда', y: 40 }, { x: "Безопасность", y: 30 }, { x: 'Возобновляемая энергетика', y: 30}, { x: "Экология", y: 20}],
    span: 24,
  },
  {
    type: 'by_tech_tags',
    title: 'Технологии',
    data: [{ x: 'Mobile', y: 40 }, { x: 'Web', y: 50 }, { x: "Big Data", y: 30 }, { x: 'ML', y: 50}, { x: "iOS", y: 10}],
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
                  data={item.data}
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
