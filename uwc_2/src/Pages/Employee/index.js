import { SideBar } from '~/components';
function Employee({ employeeData }) {
    return (
        <div>
            <h1>Employee</h1>
            <SideBar />
            {employeeData.employeeData.map((employee, index) => {
                return (
                    <div key={index}>
                        <li key={employee.id}>{employee.id}</li>
                        <li key={employee.name}>{employee.name}</li>
                        <li key={employee.sex}>{employee.sex}</li>
                        <li key={employee.address}>{employee.address}</li>
                    </div>
                );
            })}
        </div>
    );
}

export default Employee;
