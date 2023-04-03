import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
function SideBar() {
    const navigate = useNavigate();
    return (
        <Nav fill variant="tabs">
            <Nav.Item>
                <Nav.Link
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={() => {
                        navigate('/workCalendar');
                    }}
                >
                    Work Calendar
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={() => {
                        navigate('/mcpMap');
                    }}
                >
                    MCP map
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={() => {
                        navigate('/chat');
                    }}
                >
                    Chat
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={() => {
                        navigate('/employee');
                    }}
                >
                    Employee
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={() => {
                        navigate('/account');
                    }}
                >
                    Account
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default SideBar;
