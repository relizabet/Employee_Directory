import React from "react";

type Props = {
    search: string;
};

const EmployeeSearch: React.FC<Props> = ({
    search
}) => (
    <div className="container">
        <form className="search">
            <div className="form-group">
                <label htmlFor="employee-search">Employee Name:</label>
                <input 
                  value={search} 
                  type="text"
                //   onChange={handleInputChange}
                />
            </div>
        </form>
    </div>
);

export default EmployeeSearch;
