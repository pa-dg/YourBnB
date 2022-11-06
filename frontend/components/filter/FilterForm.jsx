import React, { useState, useEffect } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const FilterForm = ({ minPrice, maxPrice, numBeds, updateFilter, closeModal, clearFilter }) => {
  const defaultFilter = {
    minPrice: minPrice,
    maxPrice: maxPrice,
    numBeds: numBeds,
  }
  
  const [filter, setFilter] = useState(defaultFilter);
  const [isLoading, setIsLoading] = useState(false);
  
  const update = (field, data) => {
    if (field === 'priceRange') {
      return (data) => setFilter({
        minPrice: parseInt(data[0]),
        maxPrice: parseInt(data[1])
      });
    }
    return (e) => setFilter({ ...filter, [field]: e.currentTarget.value })
  };

  const updateNumBeds = (value) => {
    return (e) => {
      e.preventDefault();
      if (numBeds) {
        setFilter({
          ...filter, numBeds: value,
        });
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFilter(filter)
    setIsLoading(true)
    const intervalID = setTimeout(() => closeModal(), 1000);

    return () => clearTimeout(intervalID);
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearFilter()
    setFilter({
      minPrice: 0,
      maxPrice: 500,
      numBeds: 5
    });
  }
  
  return (
    <div className="filter-form-container">
      <header className="filter-form-header">
        <div className="exit-modal" onClick={() => closeModal()}>
          &times;
        </div>
        <p>Filters</p>
      </header>
      
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="filter-form-content">
          <p>Price Range</p>
          
          <div className="price-range-slider">
            <Nouislider 
              id="price-range-slider" 
              range={{ min: 0, max: 500 }} 
              start={[filter.minPrice, filter.maxPrice]} 
              onSet={update('priceRange')} 
              connect 
            />
          </div>  

          <div className="price-range-input">
            <div className="min-price-input">
              <label htmlFor="min-price">min price</label>
              <div className="price-container">
                <span>$</span>
                <input type="number" 
                  value={filter.minPrice}
                  min="0" 
                  max="500" 
                  onChange={update('minPrice')} 
                />
              </div>
            </div>
              
            <span> &#8212; </span>

            <div className="max-price-input">
              <label htmlFor="max-price">max price</label>
              <div className="price-container">
                <span>$</span>
                <input 
                  type="number" 
                  value={filter.maxPrice} 
                  min="0" 
                  max="500" 
                  onChange={update('maxPrice')} 
                />
              </div>
            </div>
          </div>

          <p>Beds</p>
      
          <div className="num-beds-input">
            {/* TO BE REFACTORED, need clicked button to stay active until another button's clicked */}
            <button className="num-bed" onClick={updateNumBeds(4)}>Any</button>
            <button className="num-bed" onClick={updateNumBeds(1)}>1</button>
            <button className="num-bed" onClick={updateNumBeds(2)}>2</button>
            <button className="num-bed" onClick={updateNumBeds(3)}>3</button>
            <button className="num-bed" onClick={updateNumBeds(4)}>4</button>
          </div> 
        </div>

        <footer className="filter-form-footer">
          <button className="filter-reset-button" onClick={handleClearFilter}>Clear all</button>
          <button className={isLoading ? "disable-apply-button" : "filter-apply-button"}>Apply</button>
        </footer>

      </form>
    </div>
  );
};

export default FilterForm;