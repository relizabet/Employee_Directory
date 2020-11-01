import React from "react";
import { Employee } from "../../models/Employee";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

type Props = {
    employees: Employee[];
};



const EmployeeList: React.FC<Props> = ({employees}) => {
    return (
        <div className="row">
            {employees ? employees.map((employee) => (
                <EmployeeCard employee={employee} />
            )): ""}
        </div>
    );
}

export default EmployeeList;