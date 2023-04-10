import { useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { SideBar } from '~/components';
import clsx from 'clsx';
import styles from './Account.module.scss';
import { id1, id2, id3 } from '~/image/employee';
function Account({ onLogout }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [render, setRender] = useState(0);
    const [sex, setSex] = useState('');
    const [address, setAddress] = useState('');
    const accountAvt = [id1, id2, id3, id1, id2, id3, id1, id2, id3, id1, id2];
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    const accountData = JSON.parse(localStorage.getItem('account'));
    const employeeIndex = employeeData.findIndex((employee) => {
        if (employee.id == accountData.id) {
            return true;
        }
    });
    const [showBox, setShowBox] = useState(false);

    const handleButtonClick = () => {
        setShowBox(true);
    };
    const employeeInfo = employeeData[employeeIndex];
    const handleCloseBox = (method, body, url, id) => {
        fetch(`${url}/${id}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    };

    console.log(employeeInfo);
    if (render) {
        setRender(false);
        employeeInfo.name = name;
        employeeInfo.sex = sex;
        employeeInfo.address = address;
        employeeData[employeeIndex] = employeeInfo;
        localStorage.setItem('employeeData', JSON.stringify(employeeData));
        setAddress('');
        setName('');
        setSex('');
        handleCloseBox('PUT', employeeInfo, 'http://localhost:3000/employeeData', employeeInfo.id);
    }
    return (
        <div>
            <ul className={clsx(styles.container)}>
                <img className={clsx(styles.account_avt, styles.flex_item)} src={accountAvt[employeeInfo.id - 1]} />
                <div className={clsx(styles.account_infor, styles.flex_item)}>
                    <li>Name: {employeeInfo.name}</li>
                    <li>Id Account: {employeeInfo.id}</li>
                    <li>Sex: {employeeInfo.sex}</li>
                    <li>Address: {employeeInfo.address}</li>
                    <li>BackOfficer: {employeeInfo.BackOfficer ? 'Yes' : 'No'}</li>
                    <div>
                        <Button
                            variant="outline-secondary"
                            onClick={handleButtonClick}
                            className={clsx(styles.btn_change)}
                        >
                            Change inf
                        </Button>
                        <Button
                            variant="outline-secondary"
                            className={clsx(styles.btn_logout)}
                            onClick={() => {
                                onLogout();
                                navigate('/');
                            }}
                        >
                            Log out
                        </Button>
                        {showBox && (
                            <div className={clsx(styles.overlay)}>
                                <div className={clsx(styles.box)}>
                                    <CloseButton
                                        className={clsx(styles.flex_item, styles.close_btn)}
                                        onClick={() => {
                                            setShowBox(false);
                                        }}
                                    />
                                    <input
                                        className={clsx(styles.flex_item, styles.input)}
                                        placeholder="Name"
                                        value={name}
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                    ></input>
                                    <input
                                        className={clsx(styles.flex_item, styles.input)}
                                        placeholder="Sex"
                                        value={sex}
                                        onChange={(event) => {
                                            setSex(event.target.value);
                                        }}
                                    ></input>
                                    <input
                                        className={clsx(styles.flex_item, styles.input)}
                                        placeholder="Address"
                                        value={address}
                                        onChange={(event) => {
                                            setAddress(event.target.value);
                                        }}
                                    ></input>
                                    <button
                                        className={clsx(styles.flex_item)}
                                        onClick={() => {
                                            setShowBox(false);
                                            setRender(true);
                                        }}
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Account;
