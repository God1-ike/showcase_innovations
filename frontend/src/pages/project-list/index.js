import { useEffect, useState } from 'react';
import { Link } from 'wouter';

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
import { HOST } from '../../constants';
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

const Tags = (Component, tags) => {
  return (
    <>
      {tags.length ? Component : null}
      <Row gutter={[6, 6]}>
        {(tags || []).map((tag) => (
          <Col>
            <Tag style={{ marginRight: 0 }}>{tag}</Tag>
          </Col>
        ))}
      </Row>
    </>
  );
};

const color = {
  продукт: '#2F54EB',
  идея: '#FAAD14',
  прототип: '#52C41A',
};

const ProjectCard = ({ project: p }) => {
  return (
    <Card
      title={p.legal_entity_title}
      extra={<Link to={`/startup/${p.id}`}>Посмотреть</Link>}>
      <div className={styles.cardheader}>
        <Link href={`/startup/${p.id}`}>{p.title}</Link>
        <span className={styles.projectStatus}>
          <span
            className={styles.projectStatusSpot}
            style={{ backgroundColor: color[p.readiness?.toLowerCase()] }}
          />
          {p.readiness}
        </span>
      </div>
      {KeyValue('Организация МТ', p.organization_transport)}
      <Row gutter={30} style={{ marginTop: 6 }}>
        <Col>{KeyValue('Человек в организации', p.people_count)}</Col>
        <Col>{KeyValue('Сегменты рынка', p.business_segment)}</Col>
      </Row>
      <Divider />

      {Tags(
        <div style={{ margin: '8px 0' }}>
          <Text>Технологии:</Text>
        </div>,
        p.tags.reduce(
          (res, item) =>
            item.tag_type.toLowerCase() === 'технологии'
              ? [...res, item.name]
              : res,
          []
        )
      )}

      {Tags(
        <div style={{ margin: '8px 0' }}>
          <Text style={{ margin: '8px 0' }}>Сферы применения:</Text>
        </div>,
        p.tags.reduce(
          (res, item) =>
            item.tag_type.toLowerCase() === 'сферы применения'
              ? [...res, item.name]
              : res,
          []
        )
      )}
    </Card>
  );
};

const getTagsParams = (tags) => {
  const query = Object.entries(tags).reduce((res, [tag, isSelected]) => {
    if (isSelected) {
      res = res + '&tags[]=' + tag;
    }
    return res;
  }, '');
  return query ? query.replace('&', '?') : '';
};

export function ProjectList() {
  const [startups, setStartups] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState({});

  const handleClickTag = (tag) => () => {
    setSelectedTags({ ...selectedTags, [tag]: !selectedTags[tag] });
  };

  useEffect(() => {
    fetch(`${HOST}/api/tags`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.error(response);
      })
      .then((tags) =>
        setFilterTags(
          (tags || []).reduce((res, tag) => {
            res[tag.tag_type.toLowerCase()] = res[tag.tag_type.toLowerCase()]
              ? [...res[tag.tag_type.toLowerCase()], tag.name]
              : [tag.name];
            return res;
          }, {})
        )
      );
  }, []);

  useEffect(() => {
    fetch(`${HOST}/api/startups${getTagsParams(selectedTags)}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.error(response);
      })
      .then(setStartups);
  }, [selectedTags]);

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
          <Col span={6}>
            <Select
              style={{ width: '100%' }}
              placeholder='Стадия готовности'
              optionFilterProp='children'>
              <Select.Option value='Идея'>Идея</Select.Option>
              <Select.Option value='Прототип'>Прототип</Select.Option>
              <Select.Option value='Продукт'>Продукт</Select.Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select
              style={{ width: '100%' }}
              placeholder='Организация МТ'
              optionFilterProp='children'></Select>
          </Col>
          <Col span={6}>
            <Select
              style={{ width: '100%' }}
              placeholder='Человек в организации'
              optionFilterProp='children'></Select>
          </Col>
          <Col span={6}>
            <Select
              style={{ width: '100%' }}
              placeholder='Сегменты рынка'
              optionFilterProp='children'></Select>
          </Col>
        </Row>
        <div style={{ marginTop: 20, marginBottom: 8 }}>
          <Text>Технологии</Text>
        </div>
        <Row gutter={[6, 6]} style={{ overflow: 'hidden', height: 24 }}>
          {(filterTags['технологии'] || []).map((tag) => {
            return (
              <Col key={tag}>
                <Tag
                  onClick={handleClickTag(tag)}
                  color={selectedTags[tag] ? 'cyan' : 'default'}
                  style={{ marginRight: 0 }}>
                  {tag}
                </Tag>
              </Col>
            );
          })}
        </Row>
        <div style={{ marginTop: 20, marginBottom: 8 }}>
          <Text>Сферы применения</Text>
        </div>
        <Row gutter={[6, 6]} style={{ overflow: 'hidden', height: 24 }}>
          {(filterTags['сферы применения'] || []).map((tag) => {
            return (
              <Col key={tag}>
                <Tag
                  onClick={handleClickTag(tag)}
                  color={selectedTags[tag] ? 'cyan' : 'default'}
                  style={{ marginRight: 0 }}>
                  {tag}
                </Tag>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className={styles.row}>
        <Row gutter={[24, 24]}>
          {(startups || []).map((item) => (
            <Col span={8}>
              <ProjectCard project={item} />
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
}
