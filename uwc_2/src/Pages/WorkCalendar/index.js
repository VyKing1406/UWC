import { SideBar, EmployeeRender, AddItem, Calendar } from '~/components';
import React from 'react';
import { useState, useCallback, useRef, useEffect } from 'react';
import styles from './WorkCalendar.module.scss';
///////////////////////////////////

///////////////////////////////////

function WorkCalendar({ accountCurrent }) {
    const urlEmployeeData = 'http://localhost:3000/employeeData';
    fetch(urlEmployeeData)
        .then((respond) => {
            return respond.json();
        })
        .then((employeeData) => {
            localStorage.setItem('employeeData', JSON.stringify(employeeData));
        });
    return (
        <div>
            <Calendar className={styles.calendar} />
        </div>
    );
}

export default WorkCalendar;
