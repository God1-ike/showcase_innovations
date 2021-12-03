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
import styles from './styles.module.css';
const { Search } = Input;
const { Header } = Layout;

const { Text } = Typography;

const KeyValue = (key, value) => {
  return (
    <>
      <div>
        <Text type='secondary' style={{ fontSize: 12 }}>
          {key}
        </Text>
      </div>
      <Text>{value}</Text>
    </>
  );
};

const Tags = (tags) => {
  return (
    <Row gutter={[6, 6]}>
      {(tags || []).map((tag) => (
        <Col>
          <Tag>{tag}</Tag>
        </Col>
      ))}
    </Row>
  );
};

const color = {
  'проект': '#2F54EB',
  'идея': '#FAAD14',
  'прототип': '#52C41A',
};

const ProjectCard = ({ project }) => {
  return (
    <Card title={'Проект'} extra={<a href='#'>Посмотреть</a>}>
      <div className={styles.cardheader}>
        <a>Intelligent traffic</a>
        <span className={styles.projectStatus}>
        <span className={styles.projectStatusSpot} style={{backgroundColor: color['Проект'.toLowerCase()] }} />
          Проект
        </span>
      </div>
      {KeyValue('Организация МТ', 'Московский метрополитен')}
      <Row gutter={30} style={{marginTop: 6}}>
        <Col>{KeyValue('Человек в организации', 'От 20 до 100')}</Col>
        <Col>{KeyValue('Сегменты рынка', 'B2G')}</Col>
      </Row>
      <Divider />
      <div style={{margin: '8px 0'}}>
        <Text>Технологии:</Text>
      </div>
      {Tags(['Mobile', 'Web', '5G'])}
      <div style={{margin: '8px 0'}}>
        <Text style={{margin: '8px 0'}}>Сферы применения:</Text>
      </div>
      {Tags(['Транспортные системы', 'Климат', 'Электоротранспорт'])}
    </Card>
  );
};

export function ProjectList() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h3>Проекты</h3>
        <div className={styles.search}>
          <Search
            placeholder='Введите название стартапа'
            allowClear
            enterButton='Поиск'
            onSearch={console.log}
          />
        </div>
      </Header>
      <div className={`${styles.row} ${styles.bgbox}`}>
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
        <Row gutter={8} style={{ marginTop: 16 }}>
          <Col>
            <Tag>Полезный продукт</Tag>
          </Col>
          <Col>
            <Tag>Уникальный продукт</Tag>
          </Col>
          <Col>
            <Tag>Трафик</Tag>
          </Col>
          <Col>
            <Tag>Пробки</Tag>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row gutter={[24, 24]}>
          {Array(5)
            .fill({
              title: 'Ant Design Pro',
              readiness: 'Проект',
              organization: 'Московский метрополитен',
              people_count: 'От 20 до 100',
              business_segment: 'B2B',
            })
            .map((item) => (
              <Col span={8}>
                <ProjectCard />
              </Col>
            ))}
        </Row>
      </div>
    </Layout>
  );
}
