import React from "react";

type Props = {
    test: string;
};

const TestRoute: React.FC<Props> = ({
    test
}) => (
    <div className="container">
        <form className="test">
            <div className="form-group">
                <label htmlFor="employee-test">Test Input</label>
                <input 
                  value={test} 
                  type="text"
                //   onChange={handleInputChange}
                />
            </div>
        </form>
    </div>
);

export default TestRoute;

