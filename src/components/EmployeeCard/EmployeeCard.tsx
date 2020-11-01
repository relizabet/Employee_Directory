import React from "react";
import { Employee } from "../../models/Employee";
import { API } from "../../utils/API";
import EmployeeList from "../EmployeeList/EmployeeList";


type Props = {
    employee: Employee;
};

const EmployeeCard: React.FC<Props> = ({employee}) => {
    API.getEmployees()
        .then(response => console.log(response.data.results));

    return (
        <div className="col-sm-3">
            <div className="card">
            <div className="card-body">
                <img alt={employee.firstName} src={employee.picture}></img>
                <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
                <p className="card-text">{employee.cell}</p>
                <p className="card-text">{employee.email}</p>
            </div>
            </div>
        </div>
    );
}

export default EmployeeCard;