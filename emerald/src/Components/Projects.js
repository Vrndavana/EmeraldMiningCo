import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function Projects() {

    return(

        <div>
            <Nav>
             <Link to='/' id="sasd">           HOME           </Link>
             <Link to='/About' id="asd">       ABOUT          </Link>
            </Nav>

            <div class="BannerB"> <h1 class="Down">Emerald Mining Co </h1> </div>

            <section class='BasementFloor'>
                <div class=" PROJ">
                 <h1 id="Basement" href="Basement"> Bringing mining to you soon </h1> 
                </div>
            </section>


        </div>
    )}
    export default Projects;