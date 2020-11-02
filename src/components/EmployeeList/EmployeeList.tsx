import React from "react";
import { Employee } from "../../models/Employee";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

type Props = {
    employees: Employee[];
};



const EmployeeList: React.FC<Props> = ({employees}) => {
    return (
        <div className="row row-cols-1 row-cols-md-5 justify-content-center">
            {employees ? employees.map((employee) => (
                <EmployeeCard key={employee.email} employee={employee} />
            )): ""}
        </div>
    );
}

export default EmployeeList;