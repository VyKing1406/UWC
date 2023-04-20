import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './SideBar.module.scss';
import clsx from 'clsx';
import Nav from 'react-bootstrap/Nav';
function SideBar() {
    const navigate = useNavigate();
    const navItems = [
        { id: 1, title: 'Home' },
        { id: 2, title: 'About' },
        { id: 3, title: 'Contact' },
    ];
    const [activeTab, setActiveTab] = useState(navItems[0].id);

    const handleSelect = (selectedKey) => {
        setActiveTab(selectedKey);
    };
    return (
        <div className={styles.sideBar}>
            <Nav fill variant="tabs" activeKey={activeTab} onSelect={handleSelect}>
                <Nav.Item key={1} className={activeTab === '1' ? styles.active : ''}>
                    <Nav.Link
                        eventKey="1"
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item key={2} className={activeTab === '2' ? styles.active : ''}>
                    <Nav.Link
                        eventKey="2"
                        onClick={() => {
                            navigate('/workCalendar');
                        }}
                    >
                        Work Calendar
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item key={3} className={activeTab === '3' ? styles.active : ''}>
                    <Nav.Link
                        eventKey="3"
                        onClick={() => {
                            navigate('/mcpMap');
                        }}
                    >
                        MCP map
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item key={4} className={activeTab === '4' ? styles.active : ''}>
                    <Nav.Link
                        eventKey="4"
                        onClick={() => {
                            navigate('/chat');
                        }}
                    >
                        Chat
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item key={5} className={activeTab === '5' ? styles.active : ''}>
                    <Nav.Link
                        eventKey="5"
                        onClick={() => {
                            navigate('/employee');
                        }}
                    >
                        Employee
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item key={6} className={activeTab === '6' ? styles.active : ''}>
                    <Nav.Link
                        eventKey="6"
                        onClick={() => {
                            navigate('/account');
                        }}
                    >
                        Account
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default SideBar;
