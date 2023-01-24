import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState(data);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1&per_page=11')
      .then(res => res.json())
      .then(json => {
        setData(json.data);
      })
  }, [])

  useEffect(() => {
    const newFilteredData = data.filter((data) => {
      return data.first_name.toLowerCase().includes(searchField) || data.last_name.toLowerCase().includes(searchField);
    });

    setFilterData(newFilteredData);
  }, [data, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Final Project</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='search users'
      />
      <CardList filteredData={filteredData} />
    </div>
  );
};

export default App;
