import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={props.searchTerm}
        onChange={props.onSearchChange}
      />
    </div>
  );
}

export default SearchBar;
