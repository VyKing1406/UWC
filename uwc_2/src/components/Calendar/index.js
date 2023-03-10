import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import styles from './Calendar.module.scss';
import JobBox from '../JobBox';
function Calendar() {
    const employeesData = useRef(JSON.parse(localStorage.getItem('employeeData')));
    const accountData = useRef(JSON.parse(localStorage.getItem('account')));
    const MCPData = useRef(JSON.parse(localStorage.getItem('MCPData')));

    const employeeData = useRef(employeesData.current[accountData.current.id - 1]);
    const jobDate = employeeData.current.job.map((job) => {
        return job.date;
    });
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [visible, setVisible] = useState(0);
    const [dateOnclick, setDateOnClick] = useState(0);
    let dayEle = [];
    for (let i = 100; i < 100 + getStartDayInMonth(); i++) {
        dayEle.push(i);
    }
    let dayEle2 = [];
    for (let i = 1; i < getDaysInMonth() + 1; i++) {
        dayEle2.push(i);
    }

    // Lấy số ngày của 1 tháng
    function getDaysInMonth() {
        return new Date(currentYear, currentMonth + 1, 0).getDate();
    }

    // Lấy ngày bắt đầu của tháng
    function getStartDayInMonth() {
        return new Date(currentYear, currentMonth, 1).getDay();
    }

    function checkJobDay(day) {
        if (
            jobDate.some((jobday) => {
                return day == jobday;
            })
        ) {
            return true;
        }
    }
    // Active current day
    function activeCurrentDay(day) {
        let day1 = new Date().toDateString();
        let day2 = new Date(currentYear, currentMonth, day).toDateString();
        if (day1 == day2) {
            return 1;
        }
    }

    return (
        <div className={clsx(styles.container)}>
            <button
                className={clsx(styles.btn, styles.btn_prev)}
                onClick={() => {
                    if (currentMonth == 0) {
                        setCurrentMonth(11);
                        setCurrentYear(currentYear - 1);
                    } else {
                        setCurrentMonth(currentMonth - 1);
                    }
                }}
            >
                <span>
                    <i className={clsx('fa', 'fa-chevron-left')} aria-hidden="true"></i>
                </span>
            </button>
            <div className={clsx(styles.calendar)}>
                <h1>Calendar</h1>
                <div className={clsx(styles.info)}>
                    <div className={clsx(styles.month)}>
                        {new Date(currentYear, currentMonth).toLocaleString('en-us', { month: 'long' })}
                    </div>
                    <div className={clsx(styles.year)}>{currentYear}</div>
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
                    {dayEle.map((day, index) => {
                        return <div key={index + 100} className={clsx(styles.day)}></div>;
                    })}

                    {dayEle2.map((day, index) => {
                        if (activeCurrentDay(day) && checkJobDay(`${day}/${currentMonth + 1}/${currentYear}`)) {
                            return (
                                <div
                                    key={day}
                                    className={clsx(styles.day, styles.today, styles.have_job)}
                                    onClick={() => {
                                        setDateOnClick(day);
                                        setVisible(!visible);
                                    }}
                                >
                                    {day}
                                </div>
                            );
                        } else if (checkJobDay(`${day}/${currentMonth + 1}/${currentYear}`)) {
                            return (
                                <div
                                    key={day}
                                    className={clsx(styles.day, styles.have_job)}
                                    onClick={() => {
                                        setDateOnClick(day);
                                        setVisible(!visible);
                                    }}
                                >
                                    {day}
                                </div>
                            );
                        } else if (activeCurrentDay(day)) {
                            return (
                                <div
                                    key={day}
                                    className={clsx(styles.day, styles.today)}
                                    onClick={() => {
                                        setDateOnClick(day);
                                        setVisible(!visible);
                                    }}
                                >
                                    {day}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={day}
                                    className={clsx(styles.day)}
                                    onClick={() => {
                                        setDateOnClick(day);
                                        setVisible(!visible);
                                    }}
                                >
                                    {day}
                                </div>
                            );
                        }
                    })}
                </div>
            </div>

            <button
                className={clsx(styles.btn, styles.btn_next)}
                onClick={() => {
                    if (currentMonth == 11) {
                        setCurrentMonth(0);
                        setCurrentYear(currentYear + 1);
                    } else {
                        setCurrentMonth(currentMonth + 1);
                    }
                }}
            >
                <span>
                    <i className={clsx('fa', 'fa-chevron-right')} aria-hidden="true"></i>
                </span>
            </button>
            <div>
                <JobBox date={`${dateOnclick}/${currentMonth + 1}/${currentYear}`} visible={visible} />
            </div>
        </div>
    );
}

export default Calendar;
