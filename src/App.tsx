import React from 'react';
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeSearch from './components/EmployeeSearch/EmployeeSearch';
import { Employee } from './models/Employee';
import { API } from './utils/API';

interface state {
  employees: Employee[];
  search: string;
};

class App extends React.Component<{}, state> {

  constructor(
    employees: [],
    search: ""
  ) {
    // according to https://github.com/microsoft/TypeScript/issues/40511 this is not actually deprecated despite VSCode suggesting that it is
    super(employees, search);

    this.state = {
      employees: [],
      search: ""
    };
  };

  componentDidMount() {

    API.getEmployees()
      .then(response => response.data.results)
      .then(people => this.setState({employees: people}));

  }

  handleChange = (e: any) => {
    this.setState({ search: e.target.value })
  }

  render(){
    const searchedEmployees: Employee[] = this.state.employees.filter((person: Employee) => person.email.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div className="App">
        <EmployeeSearch handleChange={this.handleChange} />
        <div className="container">
          <div className="row">
            <EmployeeList employees={ searchedEmployees } />
          </div>
        </div>
      </div>
    );
  };

};

export default App;