import React, { useState } from 'react'

import './ColorPicker.css'

const ColorPicker = () => {
  document.body.style = 'background-color: red;';
  
  const [rgb, setRgb] = useState([127, 127, 127])
  const [hexes, setHexes] = useState(["7F", "7F", "7F"])
  
  const redText = (val) => {
    const hex = val.target.value < 16 
      ? `0${Number.parseInt(val.target.value, 10).toString(16)}` 
      : Number.parseInt(val.target.value, 10).toString(16)  
    const num = parseInt(Number.parseInt(val.target.value, 10)) || 0
    
    setHexes(previousHexes => Object.assign([], previousHexes, {0: hex}))
    setRgb(previousRgb => Object.assign([], previousRgb, {0: num}))
    
    let newBgColor = document.getElementsByClassName("desktopColorDisplay")
    for(let i = 0; i < newBgColor.length; i++) {
      newBgColor[i].style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    }
  }
  
  const greenText = (val) => {
    const hex = val.target.value < 16 
      ? `0${Number.parseInt(val.target.value, 10).toString(16)}` 
      : Number.parseInt(val.target.value, 10).toString(16)
      const num = parseInt(Number.parseInt(val.target.value, 10)) || 0
    
    setHexes(previousHexes => Object.assign([], previousHexes, {1: hex}))
    setRgb(previousRgb => Object.assign([], previousRgb, {1: num}))
    
    let newBgColor = document.getElementsByClassName("desktopColorDisplay")
    for(let i = 0; i < newBgColor.length; i++) {
      newBgColor[i].style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    }
  }
  
  const blueText = (val) => {
    const hex = val.target.value < 16
      ? `0${Number.parseInt(val.target.value, 10).toString(16)}` 
      : Number.parseInt(val.target.value, 10).toString(16)
      const num = parseInt(Number.parseInt(val.target.value, 10)) || 0
    
    setHexes(previousHexes => Object.assign([], previousHexes, {2: hex}))
    setRgb(previousRgb => Object.assign([], previousRgb, {2: num}))
    
    let newBgColor = document.getElementsByClassName("desktopColorDisplay")
    for(let i = 0; i < newBgColor.length; i++) {
      newBgColor[i].style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    }
  }
  
  const hexDispenser = (val) => {
    const redHex = ((val.target.value).toString().slice(1)).match(/.{1,2}/g)[0]
    const grnHex = ((val.target.value).toString().slice(1)).match(/.{1,2}/g)[1]
    const bluHex = ((val.target.value).toString().slice(1)).match(/.{1,2}/g)[2]
    
    const redNum = parseInt(redHex, 16)
    const grnNum = parseInt(grnHex, 16)
    const bluNum = parseInt(bluHex, 16)
    
    setHexes([redHex, grnHex, bluHex])
    setRgb([redNum, grnNum, bluNum])
    
    const myReference = this.desktopColorDisplay.current // The DOM element
    myReference.style.backgroundColor = `rgb(${redNum}, ${grnNum}, ${bluNum})`; // The style you want to apply
  }
  
  console.log(document.body.style.backgroundColor);
  
  return (
    <div className="desktop-contains-colorPicker">
      <div id="theDisplay" className="desktopColorDisplay">
        
      </div>
      <div className="desktop-slidecontainer">
        <div className="desktop-rowItem">
          <input className="desktop-slider desktop-slider-red"
            type="range" 
            min="0"
            max="255"
            value={rgb[0]}
            id="desktop-redRange"
            onChange={redText} 
          />
        </div>
        <div className="desktop-rowItem">
          <input
            className="desktop-input-row" 
            type="text" 
            maxLength="3" 
            size="3" 
            value={rgb[0]}
            onChange={redText} 
          />
        </div>
      </div>
      <div className="desktop-slidecontainer">
        <div className="desktop-rowItem">
          <input className="desktop-slider desktop-slider-green"
            type="range" 
            min="0" 
            max="255"
            value={rgb[1]}
            id="desktop-greenRange"
            onChange={greenText} 
          />
        </div>
        <div className="desktop-rowItem">
          <input 
            className="desktop-input-row" 
            type="text" 
            maxLength="3" 
            size="3" 
            value={rgb[1]}
            onChange={greenText}
          />
        </div>
      </div>
      <div className="desktop-slidecontainer">
        <div className="desktop-rowItem">
          <input className="desktop-slider desktop-slider-blue"
            type="range" 
            min="0" 
            max="255"
            value={rgb[2]}
            id="desktop-blueRange"
            onChange={blueText} 
          />
        </div>
        <div className="desktop-rowItem">
          <input 
            className="desktop-input-row" 
            type="text" 
            maxLength="3" 
            value={rgb[2]}
            size="3"
            onChange={blueText}
          />
        </div>
      </div>
      <div>
        <input 
          className="desktop-hex-io"
          value={`#${hexes[0]}${hexes[1]}${hexes[2]}`}
          onChange={hexDispenser}
        />
        <input className="desktop-cp-button" type="button" value="copy" />
      </div>
    </div>
  )
}

export default ColorPicker