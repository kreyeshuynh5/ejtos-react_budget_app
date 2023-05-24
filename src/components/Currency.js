import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const [Currency, setCurrency] = useState('');
    

    const submitEvent = () => {

        
    };

    return (
        <div>
            <div className='row'>

                <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setCurrency(event.target.value)}>
                        <option defaultValue value="Dollar" name="Dollar">$ Dollar</option>
                        <option value="Pound" name="Pound">£ Pound</option>
                        <option value="Euro" name="Euro">€ Euro</option>
                        <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
                  </select>

                </div>

        </div>
    );
};

export default Currency;
