import React from 'react';
import './ApplicationDiagnosticsDashboard.css';

export default function ApplicationDiagnosticsDashboard() {
    return (
        <div className='container'>
            <div className="header">
                <div className="title">Variable Speed Drive</div>
                <div className="fault">
                    <span className="icon">X</span>
                    <div className="title">Fault</div>
                </div>
                <div className="efficiency">
                    <div className="icon"></div>
                    <div className="title">Efficiency Loss 30.00%</div>
                </div>
            </div>
            <div className="body"></div>
            <div className="footer"></div>
        </div>
    );
}
