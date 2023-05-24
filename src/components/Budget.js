import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    //const { budget } = useContext(AppContext);
    const [budget, setBudget] = useState('2000');
    const { expenses } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const submitEvent = () => {

        if(budget > 20000) {
            alert("The value cannot exceed 20000 £");
            setBudget("");
            return;
        }
        if(budget < totalExpenses) {
            alert("You cannot reduce the budget value lower than spending");
            setBudget("");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: budget,
        });

};
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{ <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>}</span>
           

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
        </div>
    );
};
export default Budget;
