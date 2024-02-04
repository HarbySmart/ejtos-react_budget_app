import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const CurrencyChange = (val)=>{
        dispatch({
            type: 'CURRENCY_CHNG',
            payload: val,
        })
}


return (
    <div className='alert alert-secondary'>
    <label style={{marginLeft:'1rem', backgroundColor:'red', color:'white'}} >Currency
     <select name='hover_color'id="currency" onChange={(event)=>CurrencyChange(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'red', color:'white'}}>
    <option style={{color:'blue'}} value="$">$ Dollar</option>
    <option style={{color:'blue'}} value="£">£ Pound</option>
    <option style={{color:'blue'}} value="€">€ Euro</option>
    <option style={{color:'blue'}} value="₹">₹ Rupee</option>
  </select>	
  </label>
      
</div>
);
};

export default Currency;