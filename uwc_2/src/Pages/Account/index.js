import { useNavigate } from 'react-router-dom';
import { SideBar } from '~/components';
import clsx from 'clsx';
import styles from './Account.module.scss';
function Account({ employeeData }) {
    const employeeIndex = employeeData.employeeData.findIndex((employee) => {
        if (employee.id == employeeData.account.current.id) {
            return true;
        }
    });
    const employeeInfo = employeeData.employeeData[employeeIndex];
    return (
        <div>
            <h1>Account</h1>
            <SideBar />
            <div>
                <input
                    className={clsx(styles.input)}
                    placeholder={`Employee Number: ${employeeInfo.id}`}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                ></input>
                <button>
                    <i className="ti-pencil"></i>
                </button>
            </div>
            <div>
                <input
                    className={clsx(styles.input, styles.name)}
                    placeholder={`Name: ${employeeInfo.name}`}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                ></input>
                <button
                // onClick={() => {
                //     const input = document.querySelector(clsx(styles.name));
                //     console.log(input);
                // }}
                >
                    <i className="ti-pencil"></i>
                </button>
            </div>
            <div>
                <input
                    className={clsx(styles.input)}
                    placeholder={`sex: ${employeeInfo.sex}`}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                ></input>
                <button>
                    <i className="ti-pencil"></i>
                </button>
            </div>
            <div>
                <input
                    className={clsx(styles.input)}
                    placeholder={`Address: ${employeeInfo.address}`}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                ></input>
                <button>
                    <i className="ti-pencil"></i>
                </button>
            </div>
        </div>
    );
}

export default Account;
