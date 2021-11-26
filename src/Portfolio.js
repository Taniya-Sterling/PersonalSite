import React from 'react';
import './portfolio.scss'


const PortfolioComponent = () => {
    return(
        <div class="columns portfoliopage">
        <div class="column portfolio" id = ' spaceshopper'>
         <div class = 'title'>SPACE SHOPPER</div>
         <p> 
             The final project from my time at Fullstack academy. Space shopper is my teams version of the grace shopper project. a e-commerce site 
             that specilizes in the sales of celestial properties.              
             This project is a fullstack webapp built in the back end with nodejs and mysql, and the front end uses react and vanilla css. we pulled our data a web API, and built our own image database.
         </p>
        </div>
        <div class = ' column portfolio' id = 'retrodraw'>
          <div class = 'title'> 
          RETRO DRAW
          </div>
             <p>
             Retro draw was our first Jquery project in Fullstack academy. feel free to play around and draw a picture!
            </p>              
        </div>
        <div class = 'column portfolio' id=" STARWAVE">
       <div class = 'title'> 
       STARWAVE ARCADE
       </div>
       <p>The Arcade was out first unguided project in fullstack. we were given the choice of 5 different games we could make. I chose tic tac toe and chose to go about it using jquery.</p> 
        </div>
           </div> 
    )

}

export default PortfolioComponent;