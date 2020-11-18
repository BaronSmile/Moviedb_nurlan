import React from 'react';
import PropTypes from 'prop-types';

import './search-input.css';
import { Input } from 'antd';

const SearchInput = ({handleSubmit,handleChange}) => {
  return (
    <form onSubmit={handleSubmit} className="search-input">
      <Input placeholder="Type to search..." onChange={handleChange} />
    </form>
  );
};

SearchInput.propTypes = {
  handleSubmit:PropTypes.func.isRequired,
  handleChange:PropTypes.func.isRequired
}

export default SearchInput;
