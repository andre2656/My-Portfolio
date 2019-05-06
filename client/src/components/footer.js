import React from "react";

function Footer() {
    return (
        <div id= 'footer'>
            <div className='jumbotron margin-top'>
                <div className='row push-right'>
                    <div className='col-sm-1'>
                        <a id='page' href="sitesByDre.html">Home</a>
                    </div>
                    <div className='col-sm-1'>
                        <a id='page' href="myWork.html">Work </a>
                    </div>
                    <div className='col-sm-1'>
                        <a id='page' href="teams.html">Bio</a>
                    </div>
                    <div className='col-sm-1'>
                        <a id='page' href="sports.html">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        
        );
}

export default Footer;