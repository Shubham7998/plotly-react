import React from 'react';
import './Navbar.css';
import userPng from '../Images/user.png';

export default function Navbar() {
    function CircleRow() {
        return (
            <div className='row'>
                <Circle />
                <Circle />
                <Circle />
            </div>
        )
    }
    function Circle() {
        return (
            <div className="col circle-icon"><div className="circle-icon"></div></div>
        )
    }
    return (
        <div className='navbar'>
            <div className="gmail">Gmail</div>
            <div className="images">Images</div>
            <div className="waffle">
                <CircleRow />
                <CircleRow />
                <CircleRow />
            </div>
            <div className="gmail-pic">
                <img src={userPng} alt="" height={30} width={30} />
            </div>
        </div>
    )
}
