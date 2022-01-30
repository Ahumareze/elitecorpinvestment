import React, { useEffect, useState } from 'react';
import './Converter.css';

import Axios from 'axios';
import Dropdown from 'react-dropdown';
import DropDownList from './DropDownList';
import { HiSwitchHorizontal } from 'react-icons/hi';

const Converter = () => {
    // Initializing all the state variables 
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("btc");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);

     // Calling the api whenever the dependency changes
    useEffect(() => {
        Axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
        .then((res) => {
            setInfo(res.data[from]);
            })
    }, [from]);

    // Calling the convert function whenever
    // a user switches the currency
    useEffect(() => {
        setOptions(Object.keys(info));
        convert();
    }, [info])
        
    // Function to convert the currency
    function convert() {
        var rate = info[to];
        setOutput(input * rate);
    }
    
    // Function to switch between two currency
    function flip() {
        var temp = from;
        setFrom(to);
        setTo(temp);
    }
    return(
        <div className="Appp">
      <div style={{display: 'grid', justifyContent: 'center', marginBottom: 10}}>
          <h2>CURRENCY CON<span style={{color:'yellow'}}>VERTER</span></h2>
      </div>
      <div style={{display: 'grid', justifyContent: 'center', marginBottom: 20}}>
          <div className='about_line' />
      </div>
      <div className="containerr">
        <div className="leftt">
          <h3 className='hhhe'>Amount</h3>
          <input type="text" 
             placeholder="Enter the amount" 
             onChange={(e) => setInput(e.target.value)} />
        </div>
        <section>
          <div className="middlee">
            <h3 className='hhhe'>From</h3>
            <select name='Currency' className='Currency_input_box_item' onChange={(i) => setFrom(i.target.value) } >
              {options.map(i => <option className='Currency_item_p' selected={i === 'usd' && true } style={{textTransform: 'uppercase'}} >{i}</option>)}
            </select>
          </div>
          <div className="switchh">
            <HiSwitchHorizontal size="30px" onClick={() => { flip()}}/>
          </div>
          <div className="rightt">
            <h3 className='hhhe'>To</h3>
            <select name='Currency' className='Currency_input_box_item' onChange={(i) => setTo(i.target.value) } >
              {options.map(i => <option className='Currency_item_p' selected={i === 'btc' && true }>{i}</option>)}
            </select>
          </div>
        </section>
      </div>
      <div className="resultt">
        <button onClick={()=>{convert()}}>Convert</button>
        <h2 className='hhh2'>Converted Amount</h2>
        <p className='hhh' className='Dropdownlistm' style={{textTransform: 'uppercase'}}>{input+" "+from+" = "+output.toFixed(7) + " " + to}</p>
      </div>
    </div>
    )
}

export default Converter