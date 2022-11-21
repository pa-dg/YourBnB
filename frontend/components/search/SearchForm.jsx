import React, { useState } from "react";

const SearchForm = ({ city, updateFilter }) => {
  const [filter, setFilter] = useState({ city: "" })
  const [isLoading, setIsLoading] = useState(false);

  const update = (e) => {
    setFilter({city: e.currentTarget.value})
    console.log('#', filter)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFilter(filter)
    setIsLoading(true)
  }
  
  console.log('updatefilter', updateFilter)
  console.log('state', filter)
  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <div className="search-input">
        <label htmlFor="search-input">
          <input 
            type="text" 
            placeholder= 'Search by City (New York..)'
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