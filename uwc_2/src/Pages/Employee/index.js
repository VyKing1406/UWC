import { SideBar, EmployeeRender } from '~/components';
import styles from './Employee.module.scss';
import clsx from 'clsx';
import { id1, id2, id3 } from '~/image/employee';
function Employee() {
    const employeeAvt = [id1, id2, id3, id1, id2, id3, id1, id2, id3, id1, id2];
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.fixed)}>
                <h1>Employee</h1>
                <SideBar />
            </div>
            <div className={clsx(styles.flex_container)}>
                {employeeData.map((employee, index) => {
                    return (
                        <ul key={index} className={clsx(styles.flex_item)}>
                            <li key={employee.id}>{employee.id}</li>
                            <li key={employee.name}>{employee.name}</li>
                            <li key={employee.sex}>{employee.sex}</li>
                            <li key={employee.address}>{employee.address}</li>
                            <img className={clsx(styles.employee_avt)} src={employeeAvt[index]} />
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}

export default Employee;
