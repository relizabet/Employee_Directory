import React from "react";

type Props = {
    handleChange: any;
};

const EmployeeSearch: React.FC<Props> = ({
    handleChange
}) => (
    <div className="row justify-content-center">
        <form className="search">
            <div className="input-group">
                <div className="input-group-prepend mb-3">
                    <span className="input-group-text" id="basic-addon3">First Name</span>
                </div>
                <input 
                  placeholder= "Search Employees"
                  className="search form-control"
                  type="search"
                  onChange={handleChange}
                />
            </div>
        </form>
    </div>
);

export default EmployeeSearch;
