import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes ,
    Route 
  } from 'react-router-dom';
import MainComponent from './Main';
import Header from './Header';
import MyComponent from './AboutMe';
import PortfolioComponent from './Portfolio';
const App = () => {

    return (
      <div>       
        <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<MainComponent />} />
                <Route path="/AboutMe" element={<MyComponent />} />
                <Route path="/Projects" element={<PortfolioComponent />} />
            </Routes>
        </Router>
      </div>
    )
 
}

ReactDOM.render(<App />,document.getElementById('App'))