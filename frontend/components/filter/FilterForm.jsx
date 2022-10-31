import React, { useState } from "react";
import { connect } from "react-redux";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { closeModal } from "../../actions/modal_actions";


const FilterForm = ({ listings, minPrice, maxPrice, updateFilter, clearFilter, closeModal }) => {
  const [filter, setFilter] = useState({
    minPrice: minPrice || 0,
    maxPrice: maxPrice || 0,
  });
  
  const styles = {
    backGround: 'lightGray',
  }
  
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
            <Nouislider id="price-range-slider" 
              range={{ min: 0, max: 600 }} 
              start={[filter.minPrice, filter.maxPrice]} 
              onSet={update('priceRange')} 
              style={styles}
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
                  onChange={update('minPrice')} 
                  min="0" 
                  max="600" 
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
                  onChange={update('maxPrice')} 
                  min="0" 
                  max="600" 
                />
              </div>
            </div>
          </div>

          <p>Beds</p>

          <div className="num-beds-input">
            <button>Any</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>              
        </div>

        
        <footer className="filter-form-footer">
          <button className="filter-form-reset" onClick={() => clearFilter()}>Clear all</button>
          <button className="filter-form-apply">Apply</button>
      </footer>

      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.entities.listings),
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    udpateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearFilter: () => dispatch(clearFilter(filter, value)),
    closeModal: () => dispatch(closeModal()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);