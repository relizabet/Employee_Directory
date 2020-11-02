import React from 'react';
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeSearch from './components/EmployeeSearch/EmployeeSearch';
import EmployeeSort from './components/EmployeeSort/EmployeeSort';
import { Employee } from './models/Employee';
import { API } from './utils/API';

interface state {
  employees: Employee[];
  search: string;
  sortNames: boolean;
};

class App extends React.Component<{}, state> {

  constructor(
    employees: [],
    search: "",
    sortNames: false
  ) {
    // according to https://github.com/microsoft/TypeScript/issues/40511 this is not actually deprecated despite VSCode suggesting that it is
    super(employees, search);

    this.state = {
      employees: [],
      search: "",
      sortNames: false
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

  handleClick = () => {
    this.setState(prevState => ({sortNames: !prevState.sortNames}))
  }

  render(){
    const searchedEmployees: Employee[] = this.state.employees.filter((person: Employee) => person.name.first
      .toLowerCase()
      .includes(this.state.search.toLowerCase()))
      console.log(this.state.sortNames)
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center mt-4 mb-4">Employee Directory</h1>
          <EmployeeSearch handleChange={this.handleChange} />
          <EmployeeSort handleClick={this.handleClick} />
          <EmployeeList employees={ searchedEmployees } />
        </div>
      </div>
    );
  };

};

export default App;