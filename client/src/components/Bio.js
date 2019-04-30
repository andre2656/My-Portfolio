import React from "react";

function Bio() {
    return (
        <div>
            <div className='page'>
                <div className='container'>
                    <div className='row'>
                        <div id="image" className='col-sm mx-auto'>
                            <img id='profileImg' src="../images/IMG_1531.jpeg" alt="A.C." />
                        </div>
                        <section id="bio" className='col-md-6'>
                            <strong>
                                <h3 className= 'row'>Bio:</h3>
                            </strong>
                            <p className= 'row'>
                                I am a full-stack developer with a focus on React. 
                                I live in Salt Lake City, Utah and Irvine, California. 
                                I am experienced in team work and have a love for hard work. 
                                No task is too big for me to handle, yet I take pride in the small tasks.
                                I am here to not only succeed but to learn along the way. <br /><br />

                                My main sport is football, nonetheless I am a fan of most.
                                Sports and coding alike, the pair include problem solving at a rapid pace, team work, and dedication. 
                                One mistake and it could ruin a play such as one bug can break the code. 
                                Sports and coding are often related to a game of chess; all of the small moves add up to either make or break the bigger moves. 
                                This can also be said about high level math, which I enjoy because there is always a solution. 
                                If a problem has not been solved chances are if you keep working on it you will figure it out, at least that’s my motto. 
                                In all of these fields you have to put in the work in order to succeed. 
                                I am no stranger to hard work and know what it takes to do well and be part of a successful team.<br /><br />

                                Getting to where I am hasn't been easy, however I owe it all to my family for the encouragement and unconditional love. 
                                I began coding when I was 15 years old but before then, football was my main passion. 
                                Football taught me some of the most valuable lessons that I know. 
                                Through those lessons I’m constantly reminded to keep my head held high, never quit, and winning requires teamwork. 
                                As I started coding I kept all of those lessons in mind. Through coding I’ve improved on my problem solving skills, utilized everyday in life. 
                                Coding is challenging and you cannot know it all because it is always progressing. 
                                However no matter how hard or easy the problem is; there is a solution, using simple or complex skills. 
                                Personally it brings me to a peaceful state knowing that the possibilities are endless with code. 
                                Instead of searching for something that is missing, you can create it with hard work and determination.<br /><br />

                                Wherever I end up I will make an impact on this earth and to the individuals surrounding me.
                            </p>
                        </section>
                    </div> 
                </div>
            </div>
        </div>

    );
}

export default Bio;