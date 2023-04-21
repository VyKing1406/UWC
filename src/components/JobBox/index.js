import styles from './JobBox.module.scss';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Tippy from '@tippyjs/react/headless';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useRef, useState, useMemo } from 'react';
import clsx from 'clsx';
import EmployeeList from '../EmployeeList';
import EmployeeJob from '../EmployeeJob';
function JobBox({ date, setVisible, visible }) {
    const [addBox, setAddBox] = useState(1);
    const employeesData = useRef(JSON.parse(localStorage.getItem('employeeData')));
    const vehicleData = useRef(JSON.parse(localStorage.getItem('vehicleData')));
    const accountData = useRef(JSON.parse(localStorage.getItem('account')));
    const MCPData = useRef(JSON.parse(localStorage.getItem('MCPData')));
    const employeeData = useRef(employeesData.current[accountData.current.id]);
    const jobTodayDate = [];
    const vehicleFresh = [];

    employeeData.current.job.map((job) => {
        if (job.date == date) {
            jobTodayDate.push(job);
            vehicleFresh.push(job.vehicleId);
        }
    });

    if (visible == false) return;
    if (jobTodayDate.length > 0 && accountData.current.backOfficer == false) {
        const MCPToday = MCPData.current[jobTodayDate[0].MCPid - 1];
        return (
            <div className={clsx(styles.job_box)}>
                <ButtonGroup aria-label="Basic example">
                    <Button
                        className={clsx(styles.btn)}
                        variant="secondary"
                        onClick={() => {
                            if (addBox == 1) {
                                setAddBox(0);
                            } else setAddBox(1);
                        }}
                    >
                        MCP
                    </Button>
                    <Button
                        className={clsx(styles.btn)}
                        variant="secondary"
                        onClick={() => {
                            if (addBox == 2) {
                                setAddBox(0);
                            } else setAddBox(2);
                        }}
                    >
                        Janitor
                    </Button>
                    <Button
                        className={clsx(styles.btn)}
                        variant="secondary"
                        onClick={() => {
                            if (addBox == 3) {
                                setAddBox(0);
                            } else setAddBox(3);
                        }}
                    >
                        Collector
                    </Button>
                    <Button
                        className={clsx(styles.btn)}
                        variant="secondary"
                        onClick={() => {
                            if (addBox == 4) {
                                setAddBox(0);
                            } else setAddBox(4);
                        }}
                    >
                        Vehicle
                    </Button>
                    <Button className={clsx(styles.btn)} variant="secondary">
                        <CloseButton
                            className={clsx(styles.btn_close)}
                            onClick={() => {
                                setVisible(false);
                            }}
                        />
                    </Button>
                </ButtonGroup>
                <div className={clsx(styles.employee_list)}>
                    <EmployeeJob
                        className={clsx(styles.employeeJob)}
                        vehicleFresh={vehicleFresh}
                        jobTodayDate={jobTodayDate}
                        MCPToday={MCPToday}
                        date={date}
                        addBox={addBox}
                        employeesData={employeesData}
                    />
                </div>
            </div>
        );
    } else if (accountData.current.backOfficer == true) {
        return (
            <div className={clsx(styles.job_box)}>
                <ButtonGroup aria-label="Basic example">
                    <Button
                        className={clsx(styles.btn)}
                        variant="secondary"
                        onClick={() => {
                            if (addBox == 1) {
                                setAddBox(0);
                            } else setAddBox(1);
                        }}
                    >
                        MCP
                    </Button>
                    <Button
                        className={clsx(styles.btn)}
                        variant="secondary"
                        onClick={() => {
                            if (addBox == 2) {
                                setAddBox(0);
                            } else setAddBox(2);
                        }}
                    >
                        Janitor
                    </Button>
                    <Button
                        className={clsx(styles.btn)}
                        variant="secondary"
                        onClick={() => {
                            if (addBox == 3) {
                                setAddBox(0);
                            } else setAddBox(3);
                        }}
                    >
                        Collector
                    </Button>
                    <Button
                        className={clsx(styles.btn)}
                        variant="secondary"
                        onClick={() => {
                            if (addBox == 4) {
                                setAddBox(0);
                            } else setAddBox(4);
                        }}
                    >
                        Vehicle
                    </Button>
                    <Button className={clsx(styles.btn)} variant="secondary">
                        <CloseButton
                            className={clsx(styles.btn_close)}
                            onClick={() => {
                                setVisible(false);
                            }}
                        />
                    </Button>
                </ButtonGroup>
                <div className={clsx(styles.employee_list)}>
                    <EmployeeList date={date} addBox={addBox} />
                </div>
                <ButtonGroup aria-label="Basic example">
                    <Button
                        className={clsx(styles.btn, styles.btn_add_job)}
                        variant="secondary"
                        onClick={() => {
                            setAddBox(5);
                        }}
                    >
                        Add Job
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
    return;
}

export default JobBox;
