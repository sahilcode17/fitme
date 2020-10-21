import React, { useEffect } from "react";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Room from "./Room";
import LogPose from "./LogPose";
// import { GLITCH_SOCKET_HTTP_HOST } from "./constants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Router>
          <div className="App-container">
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/room/">
                <Room />
              </Route>
              <Route path="/pose/:imageName">
                <LogPose />
              </Route>
              <Route path="/">
                <div className="home">
                  <Link to="/">
                    <Room/>
                  </Link>
                  <h2>
                    A social exercise game you can play while social distancing.
                  </h2>
                  <img
                    className="demo"
                    alt="Animated demo of PoseParty."
                    height="300"
                    src={`${process.env.PUBLIC_URL}/img/poseparty.gif`}
                  />
                  
                  
                </div>
                {/* <h1 className="display" style={{marginBottom: '20px'}}>Demo</h1> */}
                {/* <iframe width="640" height="360" src="https://www.youtube.com/embed/1ielsQyZPLU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe> */}
              </Route>
            </Switch>
            <div className="footer">
              {/* <p>© PoseParty</p> */}
              {/* <br/> */}
              
            </div>
          </div>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
