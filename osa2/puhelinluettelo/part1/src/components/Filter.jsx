import React, {useState} from 'react';

const Filter = (props) => {
    const {searchName, setSearchName} = props;
    return (
      <>
        <label htmlFor='search'>Filter shown with</label><br/>
        <input value={searchName} onChange={(e) => {setSearchName(e.target.value)}}/>
      </>
    )
}

export default Filter;