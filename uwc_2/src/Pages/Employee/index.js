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
    const [employeeId1, setEmployeeId1] = useState('');
    const [deleteE, setDeleteE] = useState(0);
    const [render, setRender] = useState(0);

    if (render == 1 && deleteE == 1) {
        if (employeeId1 != '') {
            employeeData.current = employeeData.current.filter((item) => item.id != employeeId1);
            deleteMCPApi('DELETE', {}, 'http://localhost:3000/employeeData', employeeId1);
        } else alert('please fill in all information');
        setDeleteE(0);
        setEmployeeId1('');
    } else if (render && deleteE == 0) {
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
    function deleteMCPApi(method, body, url, id) {
        fetch(`${url}/${id}`, {
            method: method,
        })
            .then((response) => {
                if (response.ok) {
                    alert(`Employee with id ${id} has been deleted successfully.`);
                } else {
                    alert(`Failed to delete Employee with id ${id}.`);
                }
            })
            .catch((error) => {
                alert(`Failed to delete Employee with id ${id}.`, error);
            });
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
                    <div className={clsx(styles.delete_box)}>
                        <div className={clsx(styles.delete_box_container)}>
                            <input
                                placeholder="Employee id"
                                value={employeeId1}
                                onChange={(event) => {
                                    setEmployeeId1(event.target.value);
                                }}
                            ></input>

                            <button
                                onClick={() => {
                                    setRender(1);
                                    setDeleteE(1);
                                }}
                            >
                                Delete
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
