import React from "react";

function EmpCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default EmpCard;