import React from "react";

type Props = {
    search: string;
};

const EmpSearch: React.FC<Props> = ({
    search
}) => (
    <div className="container">
        <form className="search">
            <div className="form-group">
                <label htmlFor="employee-search">Employee Name:</label>
                <input value={search} type="text"/>
            </div>
        </form>
    </div>
);

export default EmpSearch;