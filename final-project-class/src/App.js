import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1&per_page=11')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json.data });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, data } = this.state;
    const filteredData = data.filter((data) => {
      return (
        data.first_name.toLowerCase().includes(searchField) ||
        data.last_name.toLowerCase().includes(searchField)
      );
    });
    return (
      <div className='App' >
        <h1 className='app-title'>Final Project</h1>
        <SearchBox
          className='search-box'
          searchField={this.onSearchChange}
          placeholder='search users'
        />
        <CardList filteredData={filteredData} />
      </div>
    );
  }
}

export default App;
