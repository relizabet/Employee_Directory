import React from "react";

type Props = {
    handleChange: any;
};

const EmployeeSearch: React.FC<Props> = ({
    handleChange
}) => (
    <div className="container">
        <form className="search">
            <div className="form-group">
                <label htmlFor="employee-search">Employee Name:</label>
                <input 
                  placeholder= "Search Employees"
                  className="search"
                  type="search"
                  onChange={handleChange}
                />
            </div>
        </form>
    </div>
);

export default EmployeeSearch;
