import { SideBar, EmployeeRender, AddItem } from '~/components';
import React from 'react';
import { useState, useCallback, useRef, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import Dropdown from 'react-bootstrap/Dropdown';
import clsx from 'clsx';
import styles from './WorkCalendar.module.scss';

///////////////////////////////////

///////////////////////////////////

function WorkCalendar() {
    let monthEle;
    let yearEle;
    let btnNext;
    let btnPrev;
    let dateEle;
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    useEffect(() => {
        monthEle = document.querySelector(`.${styles.month}`);
        yearEle = document.querySelector(`.${styles.year}`);
        btnNext = document.querySelector(`.${styles.btn_next}`);
        btnPrev = document.querySelector(`.${styles.btn_prev}`);
        dateEle = document.querySelector(`.${styles.date_container}`);
        // Xử lý khi ấn vào nút previous month
        btnPrev.addEventListener('click', function () {
            if (currentMonth == 0) {
                currentMonth = 11;
                currentYear--;
            } else {
                currentMonth--;
            }
            displayInfo();
        });
        btnNext.addEventListener('click', function () {
            if (currentMonth == 11) {
                currentMonth = 0;
                currentYear++;
            } else {
                currentMonth++;
            }
            displayInfo();
        });
    }, []);

    function displayInfo() {
        // Hiển thị tên tháng
        let currentMonthName = new Date(currentYear, currentMonth).toLocaleString('en-us', { month: 'long' });

        monthEle.innerText = currentMonthName;

        // Hiển thị năm
        yearEle.innerText = currentYear;

        // Hiển thị ngày trong tháng
        renderDate();
    }

    // Lấy số ngày của 1 tháng
    function getDaysInMonth() {
        return new Date(currentYear, currentMonth + 1, 0).getDate();
    }

    // Lấy ngày bắt đầu của tháng
    function getStartDayInMonth() {
        return new Date(currentYear, currentMonth, 1).getDay();
    }

    // Active current day
    function activeCurrentDay(day) {
        let day1 = new Date().toDateString();
        let day2 = new Date(currentYear, currentMonth, day).toDateString();
        return day1 == day2 ? `${styles.active}` : '';
    }

    // Hiển thị ngày trong tháng lên trên giao diện
    function renderDate() {
        let daysInMonth = getDaysInMonth();
        let startDay = getStartDayInMonth();

        dateEle.innerHTML = '';

        for (let i = 0; i < startDay; i++) {
            dateEle.innerHTML += `
            <div class="${styles.day}"></div>
        `;
        }

        for (let i = 0; i < daysInMonth; i++) {
            dateEle.innerHTML += `
            <div class="${styles.day} ${activeCurrentDay(i + 1)}">${i + 1}</div>
        `;
        }
    }

    // Xử lý khi ấn vào nút next month

    const employeeData = useRef(JSON.parse(localStorage.getItem('employeeData')));
    const [visible, setVisible] = useState(0);
    const [reRender, setReRender] = useState(0);
    // const [MCPs, setMCPs] = useState([]);
    // const [colectors, setColectors] = useState([]);
    // const [vehicle, setVehicles] = useState([]);
    const handleAddAttribute = useCallback((date, type, employee, MCPid) => {
        switch (type) {
            case 'janitor':
                if (
                    employee.job.every((j) => {
                        return j.date != date;
                    })
                ) {
                    employee.job.push({
                        MCPid: `${MCPid}`,
                        date: date,
                        position: 'janitor',
                        vehicleId: '1',
                    });
                    employeeData.current[employee.id - 1] = employee;
                    localStorage.setItem('employeeData', JSON.stringify(employeeData.current));
                }
                break;
            // case 'colector':
            //     if (
            //         employee.job.every((j) => {
            //             return j.date != date;
            //         })
            //     ) {
            //         employee.job.push({
            //             date: date,
            //             position: type,
            //             vehicleId: 1,
            //         });
            //         setColectors([...colectors, employee]);
            //     }
            //     break;

            default:
                break;
        }
        setReRender(!reRender);
    });
    return (
        <div>
            <h1>Work Calendar</h1>
            <SideBar />
            <div className={clsx(styles.container)}>
                <button className={clsx(styles.btn, styles.btn_prev)}>
                    <span>
                        <i className={clsx('fa', 'fa-chevron-left')} aria-hidden="true"></i>
                    </span>
                </button>
                <div className={clsx(styles.calendar)}>
                    <h1>Calendar</h1>
                    <div className={clsx(styles.info)}>
                        <div className={clsx(styles.month)}>September</div>
                        <div className={clsx(styles.year)}>2023</div>
                    </div>
                    <div className={clsx(styles.date)}>
                        <div className={clsx(styles.day_name)}>Sun</div>
                        <div className={clsx(styles.day_name)}>Mon</div>
                        <div className={clsx(styles.day_name)}>Tue</div>
                        <div className={clsx(styles.day_name)}>Wen</div>
                        <div className={clsx(styles.day_name)}>Thu</div>
                        <div className={clsx(styles.day_name)}>Fri</div>
                        <div className={clsx(styles.day_name)}>Sat</div>
                    </div>
                    <div className={clsx(styles.date, styles.date_container)}>
                        <div className={clsx(styles.day)}></div>
                        <div className={clsx(styles.day)}></div>
                        <div className={clsx(styles.day)}>1</div>
                        <div className={clsx(styles.day)}>2</div>
                        <div className={clsx(styles.day)}>3</div>
                        <div className={clsx(styles.day)}>4</div>
                        <div className={clsx(styles.day)}>5</div>
                        <div className={clsx(styles.day)}>6</div>
                        <div className={clsx(styles.day)}>7</div>
                        <div className={clsx(styles.day)}>8</div>
                        <div className={clsx(styles.day)}>9</div>
                        <div className={clsx(styles.day, styles.active)}>10</div>
                        <div className={clsx(styles.day)}>11</div>
                        <div className={clsx(styles.day)}>12</div>
                        <div className={clsx(styles.day)}>13</div>
                        <div className={clsx(styles.day)}>14</div>
                        <div className={clsx(styles.day)}>15</div>
                        <div className={clsx(styles.day)}>16</div>
                        <div className={clsx(styles.day)}>17</div>
                        <div className={clsx(styles.day)}>18</div>
                        <div className={clsx(styles.day)}>19</div>
                        <div className={clsx(styles.day)}>20</div>
                        <div className={clsx(styles.day)}>21</div>
                        <div className={clsx(styles.day)}>22</div>
                        <div className={clsx(styles.day)}>23</div>
                        <div className={clsx(styles.day)}>24</div>
                        <div className={clsx(styles.day)}>25</div>
                        <div className={clsx(styles.day)}>26</div>
                        <div className={clsx(styles.day)}>27</div>
                        <div className={clsx(styles.day)}>28</div>
                        <div className={clsx(styles.day)}>29</div>
                        <div className={clsx(styles.day)}>30</div>
                        <div className={clsx(styles.day)}>31</div>
                    </div>
                </div>
                <button className={clsx(styles.btn, styles.btn_next)}>
                    <span>
                        <i className={clsx('fa', 'fa-chevron-right')} aria-hidden="true"></i>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default WorkCalendar;

{
    /* <div style={{ display: 'flex' }}>
                {/* <Dropdown style={{ marginTop: '16px' }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        MCP
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {MCPs.map((MCP, index) => {
                            return (
                                <Dropdown.Item href="#/action-1" key={index}>
                                    <div>{MCP.name}</div>
                                    <div>{MCP.address}</div>
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <Tippy
                    visible={visible === 1}
                    placement={'bottom'}
                    render={(attrs) => (
                        <EmployeeRender employeeData={employeeData} handleAddAttribute={[handleAddAttribute, 'MCP']} />
                    )}
                >
                    <button
                        style={{ margin: '16px' }}
                        onClick={() => {
                            setVisible(visible === 1 ? 0 : 1);
                        }}
                    >
                        <i className={clsx(styles.ti-pencil"></i>
                    </button>
                </Tippy> 
                <Dropdown style={{ marginTop: '16px' }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Janitor
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {employeeData.current.map((employee, index) => {
                            return employee.job.map((job, index1) => {
                                if (job.date == '3/6/2023' && job.position == 'janitor' && job.MCPid == '1') {
                                    return (
                                        <div key={index}>
                                            <Dropdown.Item>{employee.id}</Dropdown.Item>
                                            <Dropdown.Item>{employee.name}</Dropdown.Item>
                                        </div>
                                    );
                                }
                            });
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <AddItem handleAddAttribute={handleAddAttribute} type="janitor" />

                {/* <Dropdown style={{ marginTop: '16px' }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Colector
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {colectors.map((colector, index) => {
                            return (
                                <Dropdown.Item key={index}>
                                    <div>
                                        <div>{colector.id}</div>
                                        <div>{colector.name}</div>
                                    </div>
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <AddItem employeeData={employeeData} handleAddAttribute={handleAddAttribute} type="colector" />

                <Dropdown style={{ marginTop: '16px' }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Vehicle
                    </Dropdown.Toggle>

                    <Dropdown.Menu></Dropdown.Menu>
                </Dropdown>
                <Tippy
                    visible={visible === 4}
                    placement={'bottom'}
                    render={(attrs) => (
                        <EmployeeRender
                            employeeData={employeeData}
                            handleAddAttribute={[handleAddAttribute, 'vehicle']}
                        />
                    )}
                >
                    <button
                        style={{ margin: '16px' }}
                        onClick={() => {
                            setVisible(visible === 4 ? 0 : 4);
                        }}
                    >
                        <i className={clsx(styles.ti-pencil"></i>
                    </button>
                    {/* <i href=""></i>
                </Tippy> 
                    </div> */
}
