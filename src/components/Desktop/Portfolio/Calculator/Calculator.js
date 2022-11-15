import React, { useState } from 'react'

import './Calculator.css'

const Calculator = () => {
  /*
  const maxChar = "TOO MUCH"
  const [total, setTotal] = useState(0)
  const [ac, setAc] = useState("AC")
  const [operation, setOperation] = useState()
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(firstNumber)
  const [is2ndAct, setIs2ndAct] = useState(false)
  
  const firstNumPusher = (num) => {
    if(firstNumber === 0) {
      setFirstNumber(prevFirstNumber => prevFirstNumber+num)
    }
    
    if(firstNumber !== 0) {
      setFirstNumber(prevFirstNumber => prevFirstNumber*10+num)
    }
    
    setTotal(prevTotal => prevTotal-prevTotal+firstNumber)
  }
  
  
  
  const processTotal = () => {
    setTotal(firstNumber + secondNumber)
  }
  
  const abilityAC = () => {
    if(total.toString() === "0") {
      setAc("AC")
    }
    
    if(total.toString() !== "0") {
      setAc("C")
    }
  }
  
  const abilityPlusMinus = () => {
    setTotal(prevTotal => ((-1)*(prevTotal)))
  }
  
  const abilityPercent = () => {
    setTotal(prevTotal => prevTotal*0.01)
  }
  
  
  const mathDivide = () => {
    setOperation=("divide")
  }
  
  const mathTimes = () => {
    setOperation=("times")
  }
  
  const mathMinus = () => {
    setOperation=("minus")
  }
  
  const mathPlus = () => {
    setOperation=("plus")
  }
  
  const mathEquals = () => {
    if(operation === "divide") 
    
    
  }
  
  
  const num0 = () => {
    
  }
  
  const num1 = () => {
    
  }
  
  const num2 = () => {
    
  }
  
  const num3 = () => {
    
  }
  
  const num4 = () => {
    
  }
  
  const num5 = () => {
    
  }
  
  const num6 = () => {
    
  }
  
  const num7 = () => {
    
  }
  
  const num8 = () => {
    
  }
  
  const num9 = () => {
    
  }
  
  
  const numDecimal = () => {
    
  }
  */
  
  
  return (
    <div className="calculator-body">
      <div className="field">
        {/*total*/}0
      </div>
      
      <div className="row">
        <div className="ability cell">{/*ac*/}AC</div>
        <div className="ability cell">+/-</div>
        <div className="ability cell">%</div>
        <div className="math cell">÷</div>
      </div>
      
      <div className="row">
        <div className="num cell">7</div>
        <div className="num cell">8</div>
        <div className="num cell">9</div>
        <div className="math cell">x</div>
      </div>
      
      <div className="row">
        <div className="num cell">4</div>
        <div className="num cell">5</div>
        <div className="num cell">6</div>
        <div className="math cell">-</div>
      </div>
      
      <div className="row">
        <div className="num cell">1</div>
        <div className="num cell">2</div>
        <div className="num cell">3</div>
        <div className="math cell">+</div>
      </div>
      
      <div className="row">
        <div className="num cellx2">0</div>
        <div className="num cell">.</div>
        <div className="math cell">=</div>
      </div>
    </div>
  )
}

export default Calculator