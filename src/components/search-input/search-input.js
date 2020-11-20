import React from 'react';

import './search-input.css';
import { Input } from 'antd';

const SearchInput = () => {
  return (
    <form className="search-input">
      <Input placeholder="Type to search..." />
    </form>
  );
};

export default SearchInput;
