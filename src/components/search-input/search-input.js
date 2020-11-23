import React from 'react';
import PropTypes from 'prop-types'

import './search-input.css';
import {Input} from 'antd';


// eslint-disable-next-line react/prop-types
const SearchInput = ({onChange, value, onKeyPress}) => (
      <Input
          className='search-input'
          placeholder="Type to search..."
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={value}
      />
)

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}


export default SearchInput;
