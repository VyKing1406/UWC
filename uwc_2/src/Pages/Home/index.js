import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Home
            </button>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Work calendar
            </button>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                MCP Map
            </button>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Chat
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

export default Home;
