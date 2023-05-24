import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const [currency, setCurrency] = useState('USD');
    

    function handleCurrencyChange(event) {
        setCurrency(event.target.value);
      }

      return (
        <div>
          <div className='row'>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              onChange={handleCurrencyChange}
              style={{
                backgroundColor: "#98FB98",
                color: 'white',
                
              }}
            >
              <option defaultValue value={currency} name="Dollar">$ Dollar</option>
              <option value="Pound" name="Pound">£ Pound</option>
              <option value="Euro" name="Euro">€ Euro</option>
              <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
            </select>
          </div>
        </div>
      );
      
};

export default Currency;
