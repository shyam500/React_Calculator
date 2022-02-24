import React,{Fragment} from 'react';
import './KeyBoard.css';

const KeyBoard = (props)=>{
    const{btnFunc} = props;

const buttonClickHandler=(e)=>{
    btnFunc(e.target.value);
}
   const btnArr = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/','.','%','+/-','AC','='];
     let buttons = btnArr.map(value=><input key={value} value={value} type='button' className='btn num' onClick={buttonClickHandler}/>)
    

    return <Fragment>
      {buttons}
    </Fragment>
}
export default KeyBoard; 