import { TeamOutlined, GlobalOutlined, FundProjectionScreenOutlined, AuditOutlined } from '@ant-design/icons'
import { Typography, Row, Col } from 'antd'

const { Paragraph } = Typography;

export const HeaderContent = (params) => (
  <>
    <Paragraph>
      Продукт представляет собой мобильную систему, способную проводить дезинфекционную обработку широкого спектра объектов как на поверхности, так и в глубине их содержимого.
    </Paragraph>
    <Row justify="start">
      <Col flex="auto">
        <TeamOutlined />
        <span> {params.fetchData.people_count}</span>
      </Col>

      <Col flex="auto">
        <GlobalOutlined />
        <a><span> {params.fetchData.site_url}</span></a>
      </Col>

      <Col flex="auto">
        <FundProjectionScreenOutlined />
        <a><span> {params.fetchData.presentation_url}</span></a>
      </Col>

      <Col flex="auto">
        <AuditOutlined />
        <span> Требуется сертификация и у нас она есть</span>
      </Col>
    </Row>
  </>
)