import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from '../Components/styled';


function About() {

return(
  <div>
      <Nav>
        <Link to='/' id="sasd">            HOME          </Link>
        <Link to='/Projects' id="asd">            PROJECTS        </Link>

      </Nav>
    
    
    
   <div class='Home'>
     <div>
        <h1 class='Hello'> ABOUT </h1>
        <h4>This Site Is Under Construction</h4>    
      </div>
   </div>

  </div>
)}
    
export default About;