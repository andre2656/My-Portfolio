import React from 'react';

const MyWork = () => {
    return(
        <div>
            <h3>My Work</h3>
            <h5>Here is a list of my Notable projects and the technology that is being used!</h5>

            <div className= 'container'>
                <div className= 'row'>
                    <div className= 'col-md-4'>

                    </div>
                    <div className= 'col-md-4'>
                        <p> The Closet a React / Express app <br/>
                            The Closet makes it easy to curate a style that's 100% you effortlessly! <br/>
                            I worked with two other collegues on this project.<br/>
                            My work included: <br/>
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
