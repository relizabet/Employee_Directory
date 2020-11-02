import React from "react";
import { Employee } from "../../models/Employee";
import "./EmployeeCard.css";

type Props = {
    employee: Employee;
};

const EmployeeCard: React.FC<Props> = ({employee}) => {

    return (
        // <div className="col-sm-3">
            <div className="card card-style text-center">
                <div className="card-body mb-2">
                    <img className="card-img-top" alt={employee.name.first} src={employee.picture.large}></img>
                    <h5 className="card-title">{employee.name.first} {employee.name.last}</h5>
                    <div className="contact">
                        <p className="card-text">{employee.email}</p>
                        <p className="card-text">{employee.cell}</p>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default EmployeeCard; 