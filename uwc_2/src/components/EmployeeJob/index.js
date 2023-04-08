import { useRef, useState, memo, useMemo } from 'react';
import clsx from 'clsx';
import styles from './EmployeeJob.module.scss';
function EmployeeJob({ vehicleFresh, jobTodayDate, MCPToday, date, addBox, employeesData }) {
    if (addBox == 1) {
        return (
            <div className={clsx(styles.container)}>
                <div>{MCPToday.MCPid}</div>
                <div>{MCPToday.address}</div>
            </div>
        );
    }
    if (addBox == 2) {
        return (
            <div>
                {employeesData.current.map((employee) => {
                    return employee.job.map((job) => {
                        if (
                            job.date == jobTodayDate[0].date &&
                            job.MCPid == jobTodayDate[0].MCPid &&
                            job.position == 'janitor'
                        ) {
                            return (
                                <div key={job} className={clsx(styles.container)}>
                                    <div>{employee.id}</div>
                                    <div>{employee.name}</div>
                                </div>
                            );
                        }
                        return;
                    });
                })}
            </div>
        );
    }
    if (addBox == 3) {
        return (
            <div>
                {employeesData.current.map((employee) => {
                    return employee.job.map((job) => {
                        if (
                            job.date == jobTodayDate[0].date &&
                            job.MCPid == jobTodayDate[0].MCPid &&
                            job.position == 'collector'
                        ) {
                            return (
                                <div key={job} className={clsx(styles.container)}>
                                    <div>{employee.id}</div>
                                    <div>{employee.name}</div>
                                </div>
                            );
                        }
                        return;
                    });
                })}
            </div>
        );
    }
    if (addBox == 4) {
        return (
            <div className={clsx(styles.container)}>
                <div>{vehicleFresh[0]?.vehicleId}</div>
                <div>{vehicleFresh[0]?.type}</div>
            </div>
        );
    }
}

export default EmployeeJob;
