import React, { useEffect } from 'react'

import './EasyX.css'

import XoSymbols from '../../../../../../img/SVG/xo/xo-symbols.svg'
// import XXoSymbols from '../../../../../../img/SVG/xo/x-xo-symbols.svg'
// import OXoSymbols from '../../../../../../img/SVG/xo/o-xo-symbols.svg'
import BtnXXoSymbols from '../../../../../../img/SVG/xo/btn-x-xo-symbols.svg'
import BtnOXoSymbols from '../../../../../../img/SVG/xo/btn-o-xo-symbols.svg'

const xoCells = '50px'
// .______________.
// |_a1_|_a2_|_a3_|
// |_b1_|_b2_|_b3_|
// |_c1_|_c2_|_c3_|
// '¯¯¯¯¯¯¯¯¯¯¯¯¯¯'

const comPicks = {
  a1: false,
  a2: false,
  a3: false,
  b1: false,
  b2: false,
  b3: false,
  c1: false,
  c2: false,
  c3: false,
  think: false
}

const myPicks = {
  a1: false,
  a2: false,
  a3: false,
  b1: false,
  b2: false,
  b3: false,
  c1: false,
  c2: false,
  c3: false
}

const cells = {
  norm: (<img 
    className="desktop-xoCells desktop-xoCells-pointer"
    src={XoSymbols} 
    alt="grayed out xo option" 
    width={xoCells} 
    height={xoCells}
  />),
  think: (<img 
    className="desktop-xoCells"
    src={XoSymbols} 
    alt="grayed out xo option" 
    width={xoCells} 
    height={xoCells}
  />),
  x: (<img 
    className="desktop-xoCells"
    src={BtnXXoSymbols} 
    alt="grayed out xo option" 
    width={xoCells} 
    height={xoCells}
  />),
  o: (<img 
    className="desktop-xoCells"
    src={BtnOXoSymbols} 
    alt="grayed out xo option" 
    width={xoCells} 
    height={xoCells}
  />)
}

const timer = {
  from: 500,
  to: 1000
}

export default function Decide() {  
  const engine = () => {
    console.log('engine')
    setTimeout(comPicks.a2 = true, Math.floor(Math.random() * timer.to) + timer.from)
    
    comPicks.think = false
  }
  
  const myA1 = () => {
    console.log('myA1')
    myPicks.a1 = true
    comPicks.think = true
    engine()
  }
  
  const clickA1 = () => {
    console.log('')
    console.log(`comPicks.think: ${comPicks.think}`)
    console.log(`comPicks.a1: ${comPicks.a1}`)
    console.log(`myPicks.a1: ${comPicks.a1}`)
    console.log('')
    console.log('clickA1')
    const cellA1 = (<span className="desktop-vCenter">
      { comPicks.think && (!comPicks.a1 && !myPicks.a1) ? cells.think
      : !comPicks.think && (!comPicks.a1 && !myPicks.a1) ? cells.norm
      : comPicks.a1 && !myPicks.a1 ? cells.o
      : cells.x}
    </span>)
    
    return !comPicks.think && (!comPicks.a1 && !myPicks.a1) ? (<div className="desktop-row-1-col-a" onClick={myA1}>
        {cellA1}
      </div>)
    : (<div className="desktop-row-1-col-a">
      {cellA1}
    </div>)
  }
  
  const myA2 = () => {
    console.log('myA2')
    myPicks.a2 = true
    comPicks.think = true
    engine()
  }
  
  const clickA2 = () => {
    console.log('clickA2')
    const cellA2 = (<span className="desktop-vCenter">
      { comPicks.think && (!comPicks.a2 && !myPicks.a2) ? cells.think
      : !comPicks.think && (!comPicks.a2 && !myPicks.a2) ? cells.norm
      : comPicks.a2 && !myPicks.a2 ? cells.o
      : cells.x}
    </span>)
    
    return !comPicks.think && (!comPicks.a2 && !myPicks.a2) ? (<div className="desktop-row-1-col-b" onClick={myA2}>
      {cellA2}
    </div>)
    : (<div className="desktop-row-1-col-b">
      {cellA2}
    </div>)
  }
  
  const gameRow1 = (
      <div className="desktop-row-1">
        {clickA1()}
        {clickA2()}
        <div className="desktop-row-1-col-c">
          <span className="desktop-vCenter">
            <img 
              className="desktop-xoCells" 
              src={XoSymbols} 
              alt="grayed out xo option" 
              width={xoCells} 
              height={xoCells}
            />
          </span>
        </div>
      </div>
  )
  const gameRow2 = (
    <div className="desktop-row-2">
      <div className="desktop-row-2-col-a">
        <span className="desktop-vCenter">
          <img 
            className="desktop-xoCells" 
            src={XoSymbols} 
            alt="grayed out xo option" 
            width={xoCells} 
            height={xoCells}
          />
        </span>
      </div>
      <div className="desktop-row-2-col-b">
        <span className="desktop-vCenter">
          <img 
            className="desktop-xoCells" 
            src={XoSymbols} 
            alt="grayed out xo option" 
            width={xoCells} 
            height={xoCells}
          />
        </span>
      </div>
      <div className="desktop-row-2-col-c">
        <span className="desktop-vCenter">
          <img 
            className="desktop-xoCells" 
            src={XoSymbols} 
            alt="grayed out xo option" 
            width={xoCells} 
            height={xoCells}
          />
        </span>
      </div>
    </div>
  )
  const gameRow3 = (
    <div className="desktop-row-3">
      <div className="desktop-row-3-col-a">
        <span className="desktop-vCenter">
          <img 
            className="desktop-xoCells" 
            src={XoSymbols} 
            alt="grayed out xo option" 
            width={xoCells} 
            height={xoCells}
          />
        </span>
      </div>
      <div className="desktop-row-3-col-b">
        <span className="desktop-vCenter">
          <img 
            className="desktop-xoCells" 
            src={XoSymbols} 
            alt="grayed out xo option" 
            width={xoCells} 
            height={xoCells}
          />
        </span>
      </div>
      <div className="desktop-row-3-col-c">
        <span className="desktop-vCenter">
          <img 
            className="desktop-xoCells" 
            src={XoSymbols} 
            alt="grayed out xo option" 
            width={xoCells} 
            height={xoCells}
          />
        </span>
      </div>
    </div>
  )
  
  console.log(`comPicks.think: ${comPicks.think}`)
  console.log(`comPicks.a1: ${comPicks.a1}`)
  console.log(`myPicks.a1: ${comPicks.a1}`)
  
  useEffect(() => {
  }, [])
  
  return (
    <div className="desktop-game-border-orange">
      {gameRow1}
      {gameRow2}
      {gameRow3}
    </div>
  )
}