import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WhatIsJava from './WhatIsJava'
import VariablesAndComments from './VariablesAndComments';

const WebPages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/what-is-java" component = {WhatIsJava} />
            <Route path = "/variables-and-comments" component = {VariablesAndComments} />
        </Router>
    );
};
export default Webpages;