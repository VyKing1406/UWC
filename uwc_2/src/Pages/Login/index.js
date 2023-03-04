import { useNavigate } from 'react-router-dom';
import { Account } from '~/class';
function Login({ onLogin }) {
    const navigate = useNavigate();
    const user = new Account();
    return (
        <div>
            <h1>Login</h1>
            <input
                placeholder="userName"
                onChange={(event) => {
                    user.setAccountName(event.target.value);
                }}
            ></input>
            <input
                placeholder="passWord"
                onChange={(event) => {
                    user.setAccountPassWord(event.target.value);
                }}
            ></input>
            <button
                onClick={() => {
                    onLogin(user);
                }}
            >
                ĐĂNG NHẬP
            </button>
        </div>
    );
}

export default Login;
