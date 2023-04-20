import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Account } from '~/class';
import clsx from 'clsx';
import styles from './Sigup.module.scss';
import loginBackground from '~/image/loginBackground.jpg';
function Sigup({ onLogin }) {
    const navigate = useNavigate();
    const user = new Account();
    return (
        <div className={clsx(styles.container)} style={{ backgroundImage: `url(${loginBackground})` }}>
            <div className={clsx(styles.login_box)}>
                <Form>
                    <div className={clsx(styles.login_box__title)}>SIG UP</div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Enter user name"
                            onChange={(event) => {
                                user.setAccountName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            onChange={(event) => {
                                user.setAccountPassWord(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password again</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            onChange={(event) => {
                                user.setAccountPassWord(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className={clsx(styles.login_box_button)}>
                        <Button className={clsx(styles.button_login)}>SIGUP</Button>
                        <Button
                            className={clsx(styles.button_signin)}
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            SIGIN
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Sigup;
