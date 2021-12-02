import { Layout } from 'antd';
import styles from './styles.module.css';

const { Header, Content } = Layout;

export function SuccessForm() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>Заявка на участие</Header>
      <Content className={styles.content}>
      <div className={styles.box}>
        <svg
          width='80'
          height='80'
          viewBox='0 0 80 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M40.0002 78.7493C18.5993 78.7493 1.25048 61.4004 1.25048 39.9995C1.25048 18.5986 18.5993 1.24975 40.0002 1.24975C61.4011 1.24975 78.75 18.5986 78.75 39.9995C78.75 61.4004 61.4011 78.7493 40.0002 78.7493Z'
            stroke='#08979C'
            stroke-width='2.49998'
          />
          <path
            d='M57.8595 25.6243H54.739C54.3015 25.6243 53.8863 25.8252 53.6185 26.1689L35.2123 49.4857L26.3865 38.3028C26.253 38.1332 26.0828 37.9962 25.8887 37.9019C25.6947 37.8075 25.4818 37.7584 25.266 37.7581H22.1455C21.8464 37.7581 21.6812 38.1019 21.8642 38.334L34.0918 53.825C34.6632 54.5482 35.7615 54.5482 36.3373 53.825L58.1408 26.1957C58.3238 25.968 58.1586 25.6243 57.8595 25.6243Z'
            fill='#08979C'
          />
        </svg>
        <h4 style={{marginTop: 24, marginBottom: 16}}>Заявка отправлена</h4>
        <p>
          Большое спасибо за участие! В ближайшее время с вами свяжется наш
          менеджер и раскажет о дальнейших действиях.
        </p>
      </div>
      </Content>
    </Layout>
  );
}
