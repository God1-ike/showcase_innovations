import { TeamOutlined, GlobalOutlined, FundProjectionScreenOutlined, AuditOutlined } from '@ant-design/icons'
import { Typography, Row, Col } from 'antd'
import styles from './styles.module.css';

const { Paragraph } = Typography;

export const HeaderContent = (params) => (
  <>
    <Paragraph className={styles.visible_desc}>
    {params.fetchData.description}
    </Paragraph>
    <Row justify="start">
      <Col flex="1">
        <TeamOutlined />
        <span> {params.fetchData.people_count}</span>
      </Col>

      <Col flex="1">
        <GlobalOutlined />
        <a><span> {params.fetchData.site_url}</span></a>
      </Col>

      <Col flex="1">
        <FundProjectionScreenOutlined />
        <a><span> {params.fetchData.presentation_url}</span></a>
      </Col>

      <Col flex="4"></Col>
    </Row>
  </>
)