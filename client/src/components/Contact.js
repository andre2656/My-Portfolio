import React from "react";

function Header() {
    return (
        <div>
            <div className='contatainer'>
                <section id="contact" className='col-sm'>
                    <h2>Contact:</h2>
                    <strong>Email:</strong> <a href='#' src='andre2656@gmail.com' target='_blank'> andre2656@gmail.com</a><br /><br />
                    <strong>Github:</strong> <a href='#' src='sampleName' target='_blank'> sampeleName</a><br /><br />
                    <strong>Portfolio</strong> <a href='#' src="coming soon" target='_blank'>Coming Soon</a>
                </section>
            </div>
        </div>
    );
}

export default Header;