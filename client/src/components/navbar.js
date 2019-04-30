import React from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

function Navbar() {
    return (
            <div id="navbar" className='container mx-auto'>
                <div className='row mx-auto'>
                    <div className='col-sm-3'>
                        <NavLink id='page' to="/">Home</NavLink>
                    </div>
                    <div className='col-sm-3'>
                        <NavLink id='page' to="/work">My Work </NavLink>
                    </div>
                    <div className='col-sm-3'>
                        <NavLink id='page' to="/bio">Bio</NavLink>
                    </div>
                    <div className='col-sm-3'>
                        <NavLink id='page' to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
    );
}

export default withRouter(Navbar);