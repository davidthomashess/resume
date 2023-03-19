// import React, { useState } from 'react'

import './EasyO.css'

import XoSymbols from '../../../../../../img/SVG/xo/xo-symbols.svg'
// import XXoSymbols from '../../../../../../img/SVG/xo/x-xo-symbols.svg'
// import OXoSymbols from '../../../../../../img/SVG/xo/o-xo-symbols.svg'
// import BtnXXoSymbols from '../../../../../../img/SVG/xo/btn-x-xo-symbols.svg'
// import BtnOXoSymbols from '../../../../../../img/SVG/xo/btn-o-xo-symbols.svg'

const xoCells = '50px'
// .______________.
// |_a1_|_a2_|_a3_|
// |_b1_|_b2_|_b3_|
// |_c1_|_c2_|_c3_|
// '¯¯¯¯¯¯¯¯¯¯¯¯¯¯'

export default function Decide() {
  return (
    <div className="desktop-game-border-blue">
      <div className="desktop-row-1">
        <div className="desktop-row-1-col-a">
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
        <div className="desktop-row-1-col-b">
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
    </div>
  )
}