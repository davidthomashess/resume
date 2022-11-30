import React, { useState, useEffect } from 'react'

import './ColorPicker.css'

const hexHash=/^#([0-9a-f]{3}){1,2}$/i;

const ColorPicker = () => {
  const handleFocusRGB = (event) => event.target.select()
  
  const [rgb, setRgb] = useState([127, 127, 127])
  const [hexes, setHexes] = useState(["7f", "7f", "7f"])
  const [hexColor, setHexColor] = useState(["#7f7f7f"])
  const [hexInputSwitch, setHexInputSwitch] = useState(800)
  
  useEffect(() => {
    let newBgColor = document.getElementsByClassName("desktopColorDisplay")
    for(let i = 0; i < newBgColor.length; i++) {
      newBgColor[i].style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    }
    setHexInputSwitch(0)
    setHexColor(`#${hexes[0]}${hexes[1]}${hexes[2]}`)
  }, [rgb, hexes])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(hexColor.toString().match(hexHash)) {
        const redHex = ((hexColor).toString().slice(1)).match(/.{1,2}/g)[0]
        const grnHex = ((hexColor).toString().slice(1)).match(/.{1,2}/g)[1]
        const bluHex = ((hexColor).toString().slice(1)).match(/.{1,2}/g)[2]
        
        const redNum = parseInt(redHex, 16)
        const grnNum = parseInt(grnHex, 16)
        const bluNum = parseInt(bluHex, 16)
        
        setHexes([redHex, grnHex, bluHex])
        setRgb([redNum, grnNum, bluNum])
      } else {
        setHexColor('#HEX_ONLY')
      }
    }, hexInputSwitch)

    return () => clearTimeout(timer)
  }, [hexColor, hexInputSwitch])
  
  const HexColorAndHexDelayOn = (val) => {
    setHexInputSwitch(800)
    setHexColor(val)
  }
  
  const redText = (val) => {
    
    const hex = val.target.value < 16 
      ? `0${
          isNaN(Number.parseInt(val.target.value, 10).toString(16)) 
          ? '0'
          : (Number.parseInt(val.target.value, 10).toString(16))
        }` 
      : Number.parseInt(val.target.value, 10).toString(16)  
    const num = parseInt(Number.parseInt(val.target.value, 10)) || 0
    
    setHexes(previousHexes => Object.assign([], previousHexes, {0: num <= 255 ? hex : 'ff'}))
    setRgb(previousRgb => Object.assign([], previousRgb, {0: num <= 255 ? num : 255}))
  }
  
  const greenText = (val) => {
    const hex = val.target.value < 16 
      ? `0${
          isNaN(Number.parseInt(val.target.value, 10).toString(16)) 
          ? '0'
          : (Number.parseInt(val.target.value, 10).toString(16))
        }` 
      : Number.parseInt(val.target.value, 10).toString(16)  
    const num = parseInt(Number.parseInt(val.target.value, 10)) || 0
    
    setHexes(previousHexes => Object.assign([], previousHexes, {1: num <= 255 ? hex : 'ff'}))
    setRgb(previousRgb => Object.assign([], previousRgb, {1: num <= 255 ? num : 255}))
  }
  
  const blueText = (val) => {
    const hex = val.target.value < 16 
      ? `0${
          isNaN(Number.parseInt(val.target.value, 10).toString(16)) 
          ? '0'
          : (Number.parseInt(val.target.value, 10).toString(16))
        }` 
      : Number.parseInt(val.target.value, 10).toString(16)  
    const num = parseInt(Number.parseInt(val.target.value, 10)) || 0
    
    setHexes(previousHexes => Object.assign([], previousHexes, {2: num <= 255 ? hex : 'ff'}))
    setRgb(previousRgb => Object.assign([], previousRgb, {2: num <= 255 ? num : 255}))
  }
  
  // const hexDispenser = (val) => {
  //   clearTimeout(timer)

  //   const newTimer = setTimeout(() => {
  //     const redHex = ((val.target.value).toString().slice(1)).match(/.{1,2}/g)[0]
  //     const grnHex = ((val.target.value).toString().slice(1)).match(/.{1,2}/g)[1]
  //     const bluHex = ((val.target.value).toString().slice(1)).match(/.{1,2}/g)[2]
      
  //     const redNum = parseInt(redHex, 16)
  //     const grnNum = parseInt(grnHex, 16)
  //     const bluNum = parseInt(bluHex, 16)
      
  //     setHexes([redHex, grnHex, bluHex])
  //     setRgb([redNum, grnNum, bluNum])
  //   }, 500)

  //   setTimer(newTimer)
  // }
  
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
            onFocus={handleFocusRGB}
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
            onFocus={handleFocusRGB}
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
            onFocus={handleFocusRGB}
          />
        </div>
      </div>
      <div>
        <input 
          className="desktop-hex-io"
          value={hexColor}
          onChange={val => HexColorAndHexDelayOn(val.target.value)}
        />
        <input className="desktop-cp-button" type="button" onClick={() =>  navigator.clipboard.writeText(`#${hexes[0]}${hexes[1]}${hexes[2]}`)} value="copy" />
      </div>
    </div>
  )
}

export default ColorPicker