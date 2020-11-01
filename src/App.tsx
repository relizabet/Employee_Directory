import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import { API } from './utils/API';


interface state {
  employees: [];
};

class App extends React.Component<{}, state> {

  constructor(
    employees: []
  ) {
    super(employees);

    this.state = {
      employees: []
    };
  };

  componentDidMount() {

    API.getEmployees()
      .then(response => response.data.results)
      .then(people => this.setState({employees: people}));

  }

  render(){
    return (
      <div className="App">
        <EmployeeList employees={ this.state.employees } />
      </div>
    );
  };

};

export default App;