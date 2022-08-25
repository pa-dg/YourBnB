import React, { useState } from "react";
import Nouislider from "nouislider-react";
import { closeModal } from "../../actions/modal_actions";


const FilterForm = ({ listings, minPrice, maxPrice, updateFilter, clearFilter }) => {
  const [filter, setFilter] = useState({
    minPrice: minPrice || 0,
    maxPrice: maxPrice || 0,
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFilter('maxPrice', setFilter('maxPrice'))
      .then(() => updateFilter)
  };

  const update = (field, data) => {
    if (field === 'priceRange') {
      return (data) => setFilter({
        minPrice: parseInt(data[0]),
        maxPrice: parseInt(data[1])
      });
    }
    return (e) => setFilter({ [field]: e.currentTarget.value })
  };

  return (
    <div className="filter-form">
      <header className="filter-form-header">
        <button onClick={() => closeModal()}></button>
        <h1>Filters</h1>
      </header>
      
      <form onSubmit={handleSubmit}>
        <div className="filter-form-content">
          <div><h1>Price Range</h1></div>

          <div className="filter-form-slider">
            <Nouislider id="price-range-slider" range={{ min: 0, max: 600 }} start={[filter.minPrice, filter.maxPrice]} onSet={update('priceRange')}  connect />
          </div>  

          <div className="price-range-input">
            <div className="min-price-input">
              <label htmlFor="min-price">
                <input type="number" value={filter.minPrice} onChange={update('minPrice')} min="0" max="600" />
              </label>

              <label htmlFor="max-price-input">
                <input type="number" value={filter.maxPrice} onChange={update('maxPrice')} min="0" max="600" />
              </label>
            </div>
          </div>

        </div>
        
        <footer className="filter-form-footer">
          <button className="filter-form-reset" onCliCk={() => clearFilter()}>Clear all</button>
          <button className="filter-form-apply">Apply</button>
      </footer>

      </form>
    </div>
  );
};

export default FilterForm;