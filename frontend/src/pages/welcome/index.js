import { useLocation } from "wouter";
import { Layout, Button, Space } from 'antd';
import { ROLES } from '../../constants';

export function Welcome() {
    const [_, setLocation] = useLocation();
    const setRole = (role) => () => {
        sessionStorage.setItem('role', role);
        setLocation(`/${role}`);
    }
    return <Layout style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <Space direction="vertical" align="center">
            <h1>Войти как</h1>
            <Space direction="vertical">
                <Button block onClick={setRole(ROLES.startup)}>Стартап</Button>
                <Button block onClick={setRole(ROLES.manager)}>Менеджер</Button>
                <Button block onClick={setRole(ROLES.customerIT)}>Заказчик из МТ</Button>
            </Space>
        </Space>
    </Layout>;
}
