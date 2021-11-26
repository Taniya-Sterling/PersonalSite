import React from 'react';
import './main.scss'


const MainComponent = () => {
    return(        
      <div >
      <div>
        <h1 class=" column is-9 title has-text-centered" id ='name'>Taniya Sterling</h1>
      </div>  
      <div class=" column subtitle  has-text-centered">    
        <h2 >
      "You are the light of the world. A city cannot be hid when located on a mountain." - Matthew 5:14
      </h2>
      </div>
      <p class = ' column is-desktop  quote  has-text-centered'> Florida based Software  based software developer </p>
    </div>      
      )
}
// keep in mind i may have two node-sasses running, one from bulma-start -me
export default MainComponent;