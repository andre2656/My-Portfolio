import React from "react";

function Header() {
    return (
        <div>
            <div className='contatainer'>
                {/* <section id="contact" className='col-sm'>
                    
                    <strong>Andre Campbell</strong> <p> </p><br /><br />
                    <strong>Email:</strong> <a href='mailto:andre2656@gmail.com'> andre2656@gmail.com</a><br /><br />
                    <strong>Phone:</strong> <a href='#'> (714) 803-2687</a><br /><br />
                    <strong>Github:</strong> <a href='https://github.com/andre2656' target='_blank'> andre2656</a><br /><br />
                    <strong>LinkedIn:</strong><div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="andrecampbell-dev"><a className="LI-simple-link" href='https://www.linkedin.com/in/andrecampbell-dev?trk=profile-badge' target='_blank'>Andre Campbell</a></div>
                </section> */}
                
                <div className='container flex-container' style= {{marginTop: '50px', marginBottom: '75px'}}>
                    <h4 style={{ color: 'white' }}>Click on the Links to Contact Me!</h4>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-2' />
                            <div className="card col-md-3" style={{ width: "16rem", height: '100px', margin: '10px', backgroundColor: '#414099' }}>
                                <div className="card-body">
                                    <h6 className="card-text"><h4><strong>Email</strong></h4> <a href='mailto:andre2656@gmail.com' style={{ color: 'yellow', fontWeight: 'bold'}}> andre2656@gmail.com</a></h6>
                                </div>
                            </div>
                            <div className='col-md-1' />
                            <div className="card col-md-3" style={{ width: "16rem", height: '100px', margin: '10px', backgroundColor: '#00755c' }}>
                                
                                <div className="card-body">
                                    <h6 className="card-text"><h4><strong>Phone</strong></h4> <a href='#' style={{ color: '#00addc', fontWeight: 'bold' }}> (714) 803-2687</a></h6>
                                </div>
                            </div>
                            <div className='col-md-3' />
                           </div>
                           <div className= 'row'> 
                            <div className='col-md-3' />
                            <div className="card col-md-3" style={{ width: "16rem", margin: '10px', height: '100px', backgroundColor: '#ef4123' }}>
                                <div className="card-body">
                                    <h6 className="card-text"><h4><strong>Github</strong></h4> <a href='https://github.com/andre2656' target='_blank' style={{ color: '#ffffff', fontWeight: 'bold' }}>andre2656</a></h6>
                                </div>
                            </div>
                            <div className='col-md-1' />
                            <div className="card col-md-3" style={{ width: "16rem", margin: '10px', height: '100px', backgroundColor: '#00addc' }}>
                                <div className="card-body">
                                    <h6 className="card-text"><h4><strong>LinkedIn</strong></h4><a href='https://www.linkedin.com/in/andrecampbell-dev/' target='_blank' style={{ color: 'yellow', fontWeight: 'bold' }}> Andre Campbell</a></h6>
                                </div>
                            </div>
                            <div className='col-md-2' />
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Header;