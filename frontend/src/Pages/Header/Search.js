import {React, useState} from 'react';
import useDebouncedCallback from "use-debounce/lib/useDebouncedCallback";

const Search = ({ handleSearchDropdown, handleChange, value }) => {
    const debounced = useDebouncedCallback((value) => {
        handleChange(value)
      }, 500);

    return (
        <div>
        <input type="search" 
         onFocus={()=> handleSearchDropdown(true)} 
         className="js-form-search form-control border-0  header-seacrh font-14" 
         placeholder="Search " aria-label="Search" 
         value={value}
         onChange={(e) => debounced(e.target.value)} />
        </div>
    )
}

export default Search
