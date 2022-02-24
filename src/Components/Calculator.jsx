import './Calculator.css';
import Screen from './Screen';
import KeyBoard from './KeyBoard';
import { useState } from 'react';

const Calculator = () => {
    const [data,setData] = useState([]);

    const buttonValueFunc = (value)=>{
       setData([...data,value]);
    }

    return <section className='calculator'>
        <Screen screenValue={data}/>
        <KeyBoard btnFunc={buttonValueFunc}/>
    </section>
};

export default Calculator;
