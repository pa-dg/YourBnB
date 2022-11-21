import React, { useState } from "react";

const SearchForm = ({ updateFilter }) => {
  const [filter, setFilter] = useState({ city: "" })

  const update = (e) => {
    setFilter({city: e.currentTarget.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFilter(filter)
  }

  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <div className="search-input">
        <label htmlFor="search-input">
          <input 
            title="Try New York"
            type="text" 
            placeholder="Search by City (New York..)"
            value={filter.city}
            onChange={update}
          />
        </label>
      </div>
      <button className="search-button">
        <i className="fas fa-search fa-1x"></i>
      </button>
    </form>
  )
}

export default SearchForm;