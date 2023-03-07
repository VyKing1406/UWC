import Tippy from '@tippyjs/react/headless';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import React from 'react';
function EmployeeRender({ handleAddAttribute }) {
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    return (
        <div>
            {employeeData.map((employee, index) => {
                return (
                    <ul key={index}>
                        <button
                            style={{ pointerEvents: 'auto' }}
                            onClick={() => {
                                handleAddAttribute[0]('3/6/2023', handleAddAttribute[1], employee, 1);
                            }}
                        >
                            <i className="ti-pencil"></i>
                        </button>

                        <li key={employee.id}>{employee.id}</li>
                        <li key={employee.name}>{employee.name}</li>
                        <li key={employee.sex}>{employee.sex}</li>
                        <li key={employee.address}>{employee.address}</li>
                    </ul>
                );
            })}
        </div>
    );
}

export default EmployeeRender;
