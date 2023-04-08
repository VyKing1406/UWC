import { useNavigate } from 'react-router-dom';
import { SideBar } from '~/components';
import clsx from 'clsx';
import styles from './Account.module.scss';
import { id1, id2, id3 } from '~/image/employee';
function Account({ onLogout }) {
    const navigate = useNavigate();
    const accountAvt = [id1, id2, id3, id1, id2, id3, id1, id2, id3, id1, id2];
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    const accountData = JSON.parse(localStorage.getItem('account'));
    const employeeIndex = employeeData.findIndex((employee) => {
        if (employee.id == accountData.id) {
            return true;
        }
    });
    const employeeInfo = employeeData[employeeIndex];
    console.log(employeeInfo);
    return (
        <div>
            <div className={clsx(styles.fixed)}>
                <h1>Account Details</h1>
                <SideBar />
            </div>
            <ul className={clsx(styles.container)}>
                <img className={clsx(styles.account_avt, styles.flex_item)} src={accountAvt[employeeInfo.id - 1]} />
                <div className={clsx(styles.account_infor, styles.flex_item)}>
                    <li>Name: {employeeInfo.name}</li>
                    <li>Id Account: {employeeInfo.id}</li>
                    <li>Sex: {employeeInfo.sex}</li>
                    <li>Address: {employeeInfo.address}</li>
                    <li>BackOfficer: {employeeInfo.BackOfficer ? 'Yes' : 'No'}</li>
                    <button
                        onClick={() => {
                            onLogout();
                            navigate('/');
                        }}
                    >
                        Log out
                    </button>
                </div>
            </ul>
        </div>
    );
}

export default Account;
