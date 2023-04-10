import { SideBar, EmployeeRender } from '~/components';
import { useRef, useState } from 'react';
import styles from './Employee.module.scss';
import clsx from 'clsx';
import { id1, id2, id3 } from '~/image/employee';
function Employee() {
    const employeeAvt = [id1, id2, id3, id1, id2, id3, id1, id2, id3, id1, id2];
    const employeeData = useRef(JSON.parse(localStorage.getItem('employeeData')));
    const accountData = useRef(JSON.parse(localStorage.getItem('account')));
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeSex, setEmployeeSex] = useState('');
    const [employeeAddress, setEmployeeAddress] = useState('');
    const [render, setRender] = useState(0);
    if (render) {
        let newEmployee = Object.assign(
            {},
            {
                id: employeeId,
                backOfficer: 'false',
                name: employeeName,
                sex: employeeSex,
                address: employeeAddress,
                job: [],
            },
        );

        employeeData.current.push(newEmployee);
        addEmployee('POST', newEmployee, 'http://localhost:3000/employeeData', 1);
        setEmployeeAddress('');
        setEmployeeId('');
        setEmployeeName('');
        setEmployeeSex('');
        setRender(false);
    }
    function addEmployee(method, body, url, id) {
        fetch(`${url}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    }
    if (accountData.current.backOfficer == false) {
        return (
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.flex_container)}>
                    {employeeData.current.map((employee, index) => {
                        return (
                            <ul key={index} className={clsx(styles.flex_item)}>
                                <li key={employee.id}>{employee.id}</li>
                                <li key={employee.name}>{employee.name}</li>
                                <li key={employee.sex}>{employee.sex}</li>
                                <li key={employee.address}>{employee.address}</li>
                                <img className={clsx(styles.employee_avt)} src={employeeAvt[index % 3]} />
                            </ul>
                        );
                    })}
                </div>
            </div>
        );
    }
    if (accountData.current.backOfficer == true) {
        return (
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.fixed)}>
                    <div className={clsx(styles.change_box)}>
                        <div className={clsx(styles.change_box_container)}>
                            <input
                                placeholder="Employee Id"
                                value={employeeId}
                                onChange={(event) => {
                                    setEmployeeId(Number(event.target.value));
                                }}
                            ></input>
                            <input
                                placeholder="Employee name"
                                value={employeeName}
                                onChange={(event) => {
                                    setEmployeeName(event.target.value);
                                }}
                            ></input>
                            <input
                                placeholder="Employee Sex"
                                value={employeeSex}
                                onChange={(event) => {
                                    setEmployeeSex(event.target.value);
                                }}
                            ></input>
                            <input
                                placeholder="Employee address"
                                value={employeeAddress}
                                onChange={(event) => {
                                    setEmployeeAddress(event.target.value);
                                }}
                            ></input>
                            <button
                                onClick={() => {
                                    setRender(1);
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.flex_container)}>
                    {employeeData.current.map((employee, index) => {
                        return (
                            <ul key={index} className={clsx(styles.flex_item)}>
                                <li key={employee.id}>{employee.id}</li>
                                <li key={employee.name}>{employee.name}</li>
                                <li key={employee.sex}>{employee.sex}</li>
                                <li key={employee.address}>{employee.address}</li>
                                <img className={clsx(styles.employee_avt)} src={employeeAvt[index % 3]} />
                            </ul>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Employee;
