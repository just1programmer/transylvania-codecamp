import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

import WhatIsJava from './WhatIsJava'
import VariablesAndComments from './VariablesAndComments';
import Hello from './Hello';
const WebPages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<Hello/>} />
                <Route path = "/what-is-java"  element= {<WhatIsJava/>} />
                <Route path = "/variables-and-comments" element = {<VariablesAndComments/>} />
            </Routes>   
        </Router>
    );
};
export default WebPages;