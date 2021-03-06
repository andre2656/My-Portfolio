import React from 'react';
const MyWork = () => {
    return (
        <div>
            <h3>My Work</h3>
            <h5>Here is a list of my Notable projects and the technology that is being used!</h5>

            <div className='container' id='theCloset'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='MyWorkCorousel' src="../images/marketing.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className= 'closetCarouselCap'>Marketing Site</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/SignUp.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='closetCarouselCap'>SignUp</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/settings.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='closetCarouselCap'>Settings</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/chatImg.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='closetCarouselCap'>Chat</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/APIimg.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='closetCarouselCap'>API's</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <p> The Closet a React / Express app <br />
                            The Closet makes it easy to curate a style that's 100% you effortlessly! <br />
                            I worked with two other collegues on this project.<br />
                            My work included: <br />
                            The Pinterest API. This api was used to return boards from pinterest that were set up to emulate the style the user has cosen. This also inclided What ethnicity they were and what hair color they had.
                            The Mirror That Look API. This api took in a url linking to the image that they have chosen. The API then returned results on each product that the picture included using a unique ml program. Once the results were returned they were put into a container including product pictures and links so the user could then go buy the product.
                            Live Chat Feature. For the project we did not need a complex live chat. I decided to create one from scratch resulting in a professional livechat that was made with sequelize and jquery.
                            Sequelize. The Project used sequelize to store all of the user information. I created the tables and linked those to each form then linked each of those tables to eachother.
                            Data Flow. I handeled getting the data from the user into the database and back to the user when applicable.
                            User Authentication. I handled user login and signout using sequelize and a some validation features. Passwords were saved through bycript.
                            React Components: Nav Bar, Marketing Site. I created the nav bar linking each page to its respective other pages. On the Marketing Site I handeled creating a few components to keep the style and flow the page already had.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container' id='theCloset'>
                <div className='row'>
                    <div className='col-md-7'>
                        <p> FaceDatabase an Express app <br />
                            The Closet makes it easy to curate a style that's 100% you effortlessly! <br />
                            I worked with two other collegues on this project.<br />
                            My work included: <br />
                            The Pinterest API. This api was used to return boards from pinterest that were set up to emulate the style the user has cosen. This also inclided What ethnicity they were and what hair color they had.
                            The Mirror That Look API. This api took in a url linking to the image that they have chosen. The API then returned results on each product that the picture included using a unique ml program. Once the results were returned they were put into a container including product pictures and links so the user could then go buy the product.
                            Live Chat Feature. For the project we did not need a complex live chat. I decided to create one from scratch resulting in a professional livechat that was made with sequelize and jquery.
                            Sequelize. The Project used sequelize to store all of the user information. I created the tables and linked those to each form then linked each of those tables to eachother.
                            Data Flow. I handeled getting the data from the user into the database and back to the user when applicable.
                            User Authentication. I handled user login and signout using sequelize and a some validation features. Passwords were saved through bycript.
                            React Components: Nav Bar, Marketing Site. I created the nav bar linking each page to its respective other pages. On the Marketing Site I handeled creating a few components to keep the style and flow the page already had.
                        </p>
                    </div>
                    <div className='col-md-5'>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='MyWorkCorousel' src="../images/Login.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='faceCarouselCap'>Login</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/VideoCode.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className= 'faceCarouselCap'>Video Code</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/Routes.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className= 'faceCarouselCap'>Routes Code</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/App.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='faceCarouselCap'>App Code</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/Tabel.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='faceCarouselCap'>Sequelize Code</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' id='theCloset'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='MyWorkCorousel' src="../images/Dashboard.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='betCarouselCap'>Dashboard</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/Score.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='betCarouselCap'>Score</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/Ranking.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='betCarouselCap'>Ranking Code</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/Css.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='betCarouselCap'>CSS Code</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='MyWorkCorousel' src="../images/TeamRanking.jpg" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className='betCarouselCap'>Team Ranking Code</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <p> Bet Buddy <br />
                            The Closet makes it easy to curate a style that's 100% you effortlessly! <br />
                            I worked with two other collegues on this project.<br />
                            My work included: <br />
                            The Pinterest API. This api was used to return boards from pinterest that were set up to emulate the style the user has cosen. This also inclided What ethnicity they were and what hair color they had.
                            The Mirror That Look API. This api took in a url linking to the image that they have chosen. The API then returned results on each product that the picture included using a unique ml program. Once the results were returned they were put into a container including product pictures and links so the user could then go buy the product.
                            Live Chat Feature. For the project we did not need a complex live chat. I decided to create one from scratch resulting in a professional livechat that was made with sequelize and jquery.
                            Sequelize. The Project used sequelize to store all of the user information. I created the tables and linked those to each form then linked each of those tables to eachother.
                            Data Flow. I handeled getting the data from the user into the database and back to the user when applicable.
                            User Authentication. I handled user login and signout using sequelize and a some validation features. Passwords were saved through bycript.
                            React Components: Nav Bar, Marketing Site. I created the nav bar linking each page to its respective other pages. On the Marketing Site I handeled creating a few components to keep the style and flow the page already had.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWork;
