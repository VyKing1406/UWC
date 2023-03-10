import { SideBar, EmployeeRender, AddItem, Calendar } from '~/components';
import React from 'react';
import { useState, useCallback, useRef, useEffect } from 'react';

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
            <h1>Work Calendar</h1>
            <SideBar />
            <Calendar />
        </div>
    );
}

export default WorkCalendar;
