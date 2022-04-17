import React from 'react'
import Hello from '../pages/Hello';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Welcome from '../pages/Welcome';



export default function Content() {
  return (
      <React.Fragment>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/about" element={<Hello />}/>
    </Routes>
  </BrowserRouter>       
      </React.Fragment>
  )
}
