import { useRef, useState, memo, useMemo } from 'react';
function EmployeeList({ date, addBox }) {
    const employeesData = useRef(JSON.parse(localStorage.getItem('employeeData')));
    const accountData = useRef(JSON.parse(localStorage.getItem('account')));
    const MCPData = useRef(JSON.parse(localStorage.getItem('MCPData')));
    const vehicleData = useRef(JSON.parse(localStorage.getItem('vehicleData')));
    const urlEmployeeData = 'http://localhost:3000/employeeData';
    const [MCPUpdate, setMCPUpdate] = useState([]);
    const [janitorUpdate, setJanitorUpdate] = useState([]);
    const [collectorUpdate, setCollectorUpdate] = useState([]);
    const [vehicleUpdate, setVehicleUpdate] = useState([]);
    function UpdateJobApi(method, body, url, id) {
        fetch(`${url}/${id}`, {
            method: method,
            body: JSON.stringify({
                job: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    }
    //
    const addBox5 = useMemo(() => {
        if (addBox == 5) {
            collectorUpdate.map((employeeUpdate) => {
                employeesData.current.map((employeeOld) => {
                    if (employeeOld == employeeUpdate) {
                        let newJob = {
                            MCPid: MCPUpdate,
                            position: 'collector',
                            date: date,
                            vehicleId: vehicleUpdate,
                        };
                        employeeOld.job.push(newJob);
                        employeeOld.job = Array.from(new Set(employeeOld.job));
                        UpdateJobApi('PATCH', employeeOld.job, urlEmployeeData, employeeOld.id);
                    }
                });
            });

            janitorUpdate.map((employeeUpdate) => {
                employeesData.current.map((employeeOld) => {
                    if (employeeOld == employeeUpdate) {
                        let newJob = {
                            MCPid: MCPUpdate,
                            position: 'janitor',
                            date: date,
                            vehicleId: vehicleUpdate,
                        };
                        employeeOld.job.push(newJob);
                        employeeOld.job = Array.from(new Set(employeeOld.job));
                        UpdateJobApi('PATCH', employeeOld.job, urlEmployeeData, employeeOld.id);
                    }
                    setVehicleUpdate([]);
                    setCollectorUpdate([]);
                    setJanitorUpdate([]);
                    setMCPUpdate([]);
                });
            });
        }

        return <span></span>;
    }, [addBox]);
    if (addBox == 1) {
        return (
            <div>
                {MCPData.current.MCP.map((MCP, index) => {
                    return (
                        <ul key={index}>
                            <input
                                type="checkbox"
                                onClick={(e) => {
                                    if (e.target.checked) {
                                        setMCPUpdate(MCP?.MCPid);
                                    }
                                }}
                            ></input>
                            <li>{MCP.MCPid}</li>
                            <li>{MCP.address}</li>
                        </ul>
                    );
                })}
            </div>
        );
    } else if (addBox == 2) {
        return (
            <div>
                {employeesData.current.map((employee, index) => {
                    return (
                        <ul key={index + 100}>
                            <input
                                type="checkbox"
                                onClick={(e) => {
                                    if (e.target.checked) {
                                        setJanitorUpdate([...janitorUpdate, employee]);
                                    } else {
                                        setJanitorUpdate(() => {
                                            return janitorUpdate.filter((item) => item !== employee);
                                        });
                                    }
                                }}
                            ></input>
                            <li>{employee.id}</li>
                            <li>{employee.name}</li>
                            <li>{employee.sex}</li>
                        </ul>
                    );
                })}
            </div>
        );
    } else if (addBox == 3) {
        return (
            <div>
                {employeesData.current.map((employee, index) => {
                    return (
                        <ul key={index + 200}>
                            <input
                                type="checkbox"
                                onClick={(e) => {
                                    if (e.target.checked) {
                                        setCollectorUpdate([...collectorUpdate, employee]);
                                    } else {
                                        setCollectorUpdate(() => {
                                            return collectorUpdate.filter((item) => item !== employee);
                                        });
                                    }
                                }}
                            ></input>
                            <li>{employee.id}</li>
                            <li>{employee.name}</li>
                            <li>{employee.sex}</li>
                        </ul>
                    );
                })}
            </div>
        );
    } else if (addBox == 4) {
        return (
            <div>
                {vehicleData.current.vehicle.map((vehicle, index) => {
                    return (
                        <ul key={index + 300}>
                            <input
                                type="checkbox"
                                onClick={(e) => {
                                    if (e.target.checked) {
                                        setVehicleUpdate(vehicle);
                                    }
                                }}
                            ></input>
                            <li>{vehicle.vehicleId}</li>
                            <li>{vehicle.type}</li>
                        </ul>
                    );
                })}
            </div>
        );
    } else if (addBox === 5) {
        return addBox5;
    }
    return <span></span>;
}

export default memo(EmployeeList);
