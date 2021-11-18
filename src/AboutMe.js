import React from 'react';
import './AboutMe.scss'


const MyComponent = () => {
    return(
        <div className='container columns is-multiline'>
        <div class="card column is-half is-offset-one-quarter" id ='about-me-card'>
        <div class="card-content">
    <p class="title">About Me</p>
    <ul class = "about-me-list">          
            <li class = "boxy-list" id = "boxy-list">I am a South Florida native studying software engineering at OU</li>
            <li class = "boxy-list">I grew up watching my mom build desktops from the ground up and playing video games with my dad, which are big reasons for my interest in programming</li>
            <li class = "boxy-list">my personality type is INFP</li>
            <li class = "boxy-list">I am a certified phlebotomist</li>
        </ul>
    <p class="subtitle">
     Taniya Sterling
    </p>
  </div>
</div>
</div>
    )
}

export default MyComponent;

{/* <div class = 'container'>
        <div  id= "about-me-boxy"> 
       <div className='title'>Taniya Sterling</div>
     
   </div>
           </div>  */}