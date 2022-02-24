import './Calculator.css';
import Screen from './Screen';
import KeyBoard from './KeyBoard';
import { useState } from 'react';


const Calculator = () => {
    const [data,setData] = useState([]);

    const buttonValueFunc = (value)=>{
       setData([...data,value]);
    }

    const answerFinderFunc=()=>{
        const ans = eval(data.join(''));
    setData(ans.toString().split(''));
    }

    const clearScreenFunc =  () =>{
        setData([]);
    }

    return <section className='calculator'>
        <Screen screenValue={data}/>
        <KeyBoard btnFunc={buttonValueFunc} ansFunc={answerFinderFunc} clearFunc={clearScreenFunc}/>
    </section>
};


export default Calculator;