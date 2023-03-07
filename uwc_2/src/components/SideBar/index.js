import { useNavigate } from 'react-router-dom';
function SideBar() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Home
            </button>
            <button
                onClick={() => {
                    navigate('/workCalendar');
                }}
            >
                Work calendar
            </button>
            <button
                onClick={() => {
                    navigate('/MCP Map');
                }}
            >
                MCP Map
            </button>
            <button
                onClick={() => {
                    navigate('/Chat');
                }}
            >
                Chat
            </button>
            <button
                onClick={() => {
                    navigate('/employee');
                }}
            >
                Employee
            </button>
            <button
                onClick={() => {
                    navigate('/account');
                }}
            >
                Account
            </button>
        </div>
    );
}

export default SideBar;
