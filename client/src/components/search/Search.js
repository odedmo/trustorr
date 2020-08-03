import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import ShowsService from '../../services/ShowsService';

import './Search.css';

const options = ['girls', 'Option'];

const Search = props => {

  const handleInputChange = newInputValue => {
    ShowsService.getShows(newInputValue);
    setInputValue(newInputValue);
  }

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="search-wrapper">
      <h2>Search</h2>
      <div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            handleInputChange(newInputValue)
          }}
          id="controllable-states-demo"
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
        />
        <Button variant="contained" color="primary" onClick={() => {props.onSubmit(value)}}>
          search
        </Button>
      </div>
    </div>
  );

}

export default Search;