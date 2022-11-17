import React, { useState } from 'react'

import './Calculator.css'

const errors = {
  overflow: "Overflow",
  divZero: "No #/0"
}

let useThisNumTo = "0"
let withThisNum = "0"
let lockDis = false
let operation = ""
let switchDis = false

const Calculator = () => {
  const [display, setDisplay] = useState("0")
  
  const abilityAC = () => {
    setDisplay("0")
    useThisNumTo = ""
    withThisNum = ""
    lockDis = false
    operation = ""
  }
  
  const abilityPlusMinus = () => {
    if(lockDis === false && withThisNum !== "0" && withThisNum !== "") {
      withThisNum = (parseFloat(withThisNum)*(-1)).toString()
      setDisplay(withThisNum)
    }
  }
  
  const abilityPercent = () => {
    if(lockDis === false) {
      withThisNum = (parseFloat(withThisNum)*(0.01)).toString()
      
      let checkMaxString = withThisNum.toString().split('.').join("")
      
      if(checkMaxString.length > 8) {
        lockDis = true
        setDisplay(errors.overflow)
      } else if(checkMaxString.length <= 8) {
        setDisplay(withThisNum)
      }
    }
  }
  
  const mathDivide = () => {
    if(lockDis === false) {
      if(operation !== "") {
        mathEquals()
      }
      
      useThisNumTo = withThisNum.toString()
      
      operation = "divide"
      switchDis = true
    }
  }
  
  const mathTimes = () => {
    if(lockDis === false) {
      if(operation !== "") {
        mathEquals()
      }
      
      useThisNumTo = withThisNum.toString()
      
      operation = "times"
      switchDis = true
    }
  }
  
  const mathMinus = () => {
    if(lockDis === false) {
      if(operation !== "") {
        mathEquals()
      }
      
      useThisNumTo = withThisNum.toString()
      
      operation = "minus"
      switchDis = true
    }
  }
  
  const mathPlus = () => {
    
    if(lockDis === false) {
      if(operation !== "") {
        mathEquals()
      }
      
      useThisNumTo = withThisNum.toString()
      
      operation = "plus"
      switchDis = true
    }
  }
  
  const mathEquals = () => {
    if(useThisNumTo === "") {
      useThisNumTo = "0"
    }
    
    if(withThisNum === "") {
      withThisNum = "0"
    }
    
    if(lockDis === false && operation !== "") {
      if(operation === "divide") {
        if(withThisNum === "0" || display === "0") {
          lockDis = true
          setDisplay("No #/0")
        } else if(withThisNum !== "0") {
          withThisNum = (parseFloat(useThisNumTo)/parseFloat(withThisNum)).toString()
        }
      }
      
      if(operation === "times") {
        withThisNum = (parseFloat(useThisNumTo)*parseFloat(withThisNum)).toString()
      }
      
      if(operation === "minus") {
        withThisNum = (parseFloat(useThisNumTo)-parseFloat(withThisNum)).toString()
      }
      
      if(operation === "plus") {
        withThisNum = (parseFloat(useThisNumTo)+parseFloat(withThisNum)).toString()
      }
      
      if(withThisNum.length > 8 || display.length > 8) {
        lockDis = true
        setDisplay("Overflow")
      }
      
      if(lockDis === false) {
        operation = ""
        
        setDisplay(withThisNum)
        useThisNumTo = 0
      }
    }
  }
  
  const displayHandler = (numString) => {
    if(switchDis === true) {
      withThisNum = "0"
      setDisplay("0")
      switchDis = false
    }
    
    if(withThisNum === "0") {
      withThisNum = ""
    }
    
    let checkMaxString = (withThisNum + numString).toString()
    
    if(checkMaxString.length > 8) {
      lockDis = true
      setDisplay(errors.overflow)
    }
    
    if(numString === "0" && withThisNum === "0" && lockDis === false) {
      withThisNum = "0"
      setDisplay("0")
    }
    
    if(checkMaxString.length <= 8 && lockDis === false) {
      withThisNum = withThisNum + numString.toString()
      setDisplay(withThisNum.toString())
    }
  }
  
  const num0 = () => {
    displayHandler("0")
  }
  
  const num1 = () => {
    displayHandler("1")
  }
  
  const num2 = () => {
    displayHandler("2")
  }
  
  const num3 = () => {
    displayHandler("3")
  }
  
  const num4 = () => {
    displayHandler("4")
  }
  
  const num5 = () => {
    displayHandler("5")
  }
  
  const num6 = () => {
    displayHandler("6")
  }
  
  const num7 = () => {
    displayHandler("7")
  }
  
  const num8 = () => {
    displayHandler("8")
  }
  
  const num9 = () => {
    displayHandler("9")
  }
  
  
  const decimal = () => {
    displayHandler(".")
  }
  
  
  
  return (
    <div className="calculator-body">
      <div className="field">
        {display}
      </div>
      
      <div className="row">
        <div className="ability cell" onClick={abilityAC}>{display === "0" ? "AC" : "C"}</div>
        <div className="ability cell" onClick={abilityPlusMinus}>+/-</div>
        <div className="ability cell" onClick={abilityPercent}>%</div>
        <div className="math cell" onClick={mathDivide}>÷</div>
      </div>
      
      <div className="row">
        <div className="num cell" onClick={num7}>7</div>
        <div className="num cell" onClick={num8}>8</div>
        <div className="num cell" onClick={num9}>9</div>
        <div className="math cell" onClick={mathTimes}>x</div>
      </div>
      
      <div className="row">
        <div className="num cell" onClick={num4}>4</div>
        <div className="num cell" onClick={num5}>5</div>
        <div className="num cell" onClick={num6}>6</div>
        <div className="math cell" onClick={mathMinus}>-</div>
      </div>
      
      <div className="row">
        <div className="num cell" onClick={num1}>1</div>
        <div className="num cell" onClick={num2}>2</div>
        <div className="num cell" onClick={num3}>3</div>
        <div className="math cell" onClick={mathPlus}>+</div>
      </div>
      
      <div className="row">
        <div className="num cellx2" onClick={num0}>0</div>
        <div className="num cell" onClick={decimal}>.</div>
        <div className="math cell" onClick={mathEquals}>=</div>
      </div>
    </div>
  )
}

export default Calculator