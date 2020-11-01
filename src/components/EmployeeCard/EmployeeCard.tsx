import React from "react";
import { Employee } from "../../models/Employee";
import { API } from "../../utils/API";

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
                <img alt={employee.name.first} src={employee.picture.medium}></img>
                <h5 className="card-title">{employee.name.first} {employee.name.last}</h5>
                <p className="card-text">{employee.cell}</p>
                <p className="card-text">{employee.email}</p>
            </div>
            </div>
        </div>
    );
}

export default EmployeeCard;