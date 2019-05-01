import React from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

function Navbar() {
    return (
            <div id="navbar" className='container mx-auto'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <NavLink id='page' to="/">Home</NavLink>
                    </div>
                    <div className='col-sm-3'>
                        <NavLink id='page' to="/Work">My Work </NavLink>
                    </div>
                    <div className='col-sm-3'>
                        <NavLink id='page' to="/Bio">Bio</NavLink>
                    </div>
                    <div className='col-sm-3'>
                        <NavLink id='page' to="/Contact">Contact</NavLink>
                    </div>
                </div>
            </div>
    );
}

export default withRouter(Navbar);