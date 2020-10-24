import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/nav"
import EmpCard from "./components/card"


function App() {
  return (
    <Router>
      <div>
       <Navbar />
       <EmpCard />
      </div>
    </Router>
  );
}

export default App;
