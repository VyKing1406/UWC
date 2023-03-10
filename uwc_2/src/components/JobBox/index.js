import styles from './JobBox.module.scss';
import Tippy from '@tippyjs/react/headless';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useRef, useState, useMemo } from 'react';
import clsx from 'clsx';
import EmployeeList from '../EmployeeList';
function JobBox({ date, visible }) {
    const [addBox, setAddBox] = useState(0);
    const employeesData = useRef(JSON.parse(localStorage.getItem('employeeData')));
    const vehicleData = useRef(JSON.parse(localStorage.getItem('vehicleData')));
    const accountData = useRef(JSON.parse(localStorage.getItem('account')));
    const MCPData = useRef(JSON.parse(localStorage.getItem('MCPData')));
    const employeeData = useRef(employeesData.current[accountData.current.id - 1]);
    const jobTodayDate = [];
    const vehicleFresh = [];
    employeeData.current.job.map((job) => {
        if (job.date == date) {
            jobTodayDate.push(job);
            vehicleFresh.push(jobTodayDate[0].vehicleId - 1);
        }
    });
    if (visible == false) return;

    if (jobTodayDate.length > 0 && accountData.current.backOfficer == false) {
        const MCPToday = MCPData.current.MCP[jobTodayDate[0].MCPid - 1];
        return (
            <div className={clsx(styles.jobBox)}>
                <Dropdown className={clsx(styles.btn_select)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        MCP
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div>
                            <Dropdown.Item>{MCPToday.MCPid}</Dropdown.Item>
                            <Dropdown.Item>{MCPToday.address}</Dropdown.Item>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                {/* ////////////////////////////////// */}
                <Dropdown className={clsx(styles.btn_select)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Janitor
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {employeesData.current.map((employee) => {
                            return employee.job.map((job) => {
                                if (
                                    job.date == jobTodayDate[0].date &&
                                    job.MCPid == jobTodayDate[0].MCPid &&
                                    job.position == 'janitor'
                                ) {
                                    return (
                                        <div key={job}>
                                            <Dropdown.Item>{employee.id}</Dropdown.Item>
                                            <Dropdown.Item>{employee.name}</Dropdown.Item>
                                        </div>
                                    );
                                }
                                return;
                            });
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                {/* ////////////////////////////////// */}
                <Dropdown className={clsx(styles.btn_select)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Collector
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {employeesData.current.map((employee) => {
                            return employee.job.map((job) => {
                                if (
                                    job.date == jobTodayDate[0].date &&
                                    job.MCPid == jobTodayDate[0].MCPid &&
                                    job.position == 'collector'
                                ) {
                                    return (
                                        <div key={job}>
                                            <Dropdown.Item>{employee.id}</Dropdown.Item>
                                            <Dropdown.Item>{employee.name}</Dropdown.Item>
                                        </div>
                                    );
                                }
                                return;
                            });
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className={clsx(styles.btn_select)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Vehicle
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div>
                            <Dropdown.Item>{vehicleData.current.vehicle[vehicleFresh[0]]?.vehicleId}</Dropdown.Item>
                            <Dropdown.Item>{vehicleData.current.vehicle[vehicleFresh[0]]?.type}</Dropdown.Item>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    } else if (accountData.current.backOfficer == true) {
        return (
            <div>
                <button
                    onClick={() => {
                        if (addBox == 1) {
                            setAddBox(0);
                        } else setAddBox(1);
                    }}
                >
                    MCP
                </button>
                <button
                    onClick={() => {
                        if (addBox == 2) {
                            setAddBox(0);
                        } else setAddBox(2);
                    }}
                >
                    Janitor
                </button>
                <button
                    onClick={() => {
                        if (addBox == 3) {
                            setAddBox(0);
                        } else setAddBox(3);
                    }}
                >
                    Collector
                </button>
                <button
                    onClick={() => {
                        if (addBox == 4) {
                            setAddBox(0);
                        } else setAddBox(4);
                    }}
                >
                    Vehicle
                </button>

                <div className={clsx(styles.employee_list)}>
                    <EmployeeList date={date} addBox={addBox} />
                </div>

                <button
                    onClick={() => {
                        setAddBox(5);
                    }}
                >
                    Add Job
                </button>
            </div>
        );
    }
    return;
}

export default JobBox;
