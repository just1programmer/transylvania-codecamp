import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WhatIsJava from './WhatIsJava'

const WebPages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/what-is-java" component = {WhatIsJava} />
            <Route path = "/favorites" component = {Favorites} />
        </Router>
    );
};
export default Webpages;