import { SideBar, EmployeeRender } from '~/components';
function Employee() {
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    return (
        <div>
            <h1>Employee</h1>
            <SideBar />
            {employeeData.map((employee, index) => {
                return (
                    <ul key={index}>
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

export default Employee;
