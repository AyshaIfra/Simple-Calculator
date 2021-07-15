import React, {useState,useEffect} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image from "./Calculator.jpg";


const App  = ()  => {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState(); 
  const [operations, setOperations] = useState('+');
  const [result, setResult] = useState();

  const handleSubmit = ()  => {
     if(operations==='+'){
       setResult(parseInt(valueA)+parseInt(valueB));
     }
     if(operations==='-'){
      setResult(valueA-valueB);
    }
    if(operations==='*'){
      setResult(valueA*valueB);
    }
    if(operations==='/'){
      setResult(valueA/valueB);
    }
  };

  const resetInputField = () => {
    setValueA("");
    setValueB("");
    setResult("");
  };

  return (
    <div className='body'>
    <center>
    <div className ='card '>
              <div className = 'image'>
              <img src={image} width="400" height="300" />
              </div>
              <br/>
              <div className='operations'>
                <h3>Simple Calculator</h3>
                <br/>
                <div>
                    <input className='input1' type ='text' value = {valueA} onChange ={(e) => setValueA(e.target.value)}></input>
                    &nbsp;&nbsp;&nbsp;
                    <button className ='button3'>{operations}</button>
                    &nbsp;&nbsp;&nbsp;
                    <input className='input1' type ='text' value = {valueB} onChange ={(e) => setValueB(e.target.value)}></input>
                    <br/><br/>
                </div>
                <center><h4>{result}</h4></center>
                <br/><br/>
                 <div>
                     <button className ='button1'onClick ={() =>setOperations('+')}>+</button> &nbsp;&nbsp;&nbsp;&nbsp;                            
                     <button className ='button1'onClick ={() =>setOperations('-')}>-</button> &nbsp;&nbsp;&nbsp;&nbsp;
                     <button className ='button1'onClick ={() =>setOperations('*')}>*</button> &nbsp;&nbsp;&nbsp;&nbsp;
                     <button className ='button1'onClick ={() =>setOperations('/')}>/</button>
                     <br/><br/>
                     <button className ='button4' onClick={resetInputField}>C</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <button className ='button2' onClick = {handleSubmit}>=</button>
                     <br/>
                     <br/>
                 </div>
                     
                 </div>         
    </div>
    </center>
    </div>
  );

} 

export default App;
