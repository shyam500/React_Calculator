import './Calculator.css';
import Screen from './Screen';
import KeyBoard from './KeyBoard';

const Calculator = () => {
    return <section className='calculator'>
        <Screen/>
        <KeyBoard/>
    </section>
};

export default Calculator;
