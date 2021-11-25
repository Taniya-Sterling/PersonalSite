import React from 'react';
import './AboutMe.scss'


const MyComponent = () => {
    return(
        <div className='container  '>
        <div class="card column is-full is-size-6-mobile" id ='about-me-card'>
        <div class="card-content">
    <p class="title is-size-5-mobile">About Me</p>
    <i class="material-icons">code</i>

    <ul class = "about-me-list">          
            <li class = "boxy-list">I am a South Florida native who studied software development at Fullstack Academy</li><br/>
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
