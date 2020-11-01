import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

type Props = {
    employees: [];
};



const EmployeeList: React.FC<Props> = ({employees}) => {
    return (
        <div className="card-list">
            {employees ? employees.map((employee) => (
                <EmployeeCard employee={employee} />
            )): ""}
        </div>
    );
}

export default EmployeeList;