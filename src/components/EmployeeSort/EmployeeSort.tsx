import React from "react";

type Props = {
    handleClick: any;
};

const EmployeeSort: React.FC<Props> = ({
    handleClick
}) => (
    
    <div className="row justify-content-center mb-3">
        <div className="custom-control custom-switch">
            <input 
                onClick={handleClick}
                type="checkbox" className="custom-control-input" 
                id="sort" />
            <label className="custom-control-label" htmlFor="sort">Sort Employees Alphabetically</label>
        </div>
    </div>
    
);

export default EmployeeSort;