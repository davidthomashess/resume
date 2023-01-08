import React, { useState } from 'react'

import Calculator from './Calculator/Calculator'
import ColorPicker from './ColorPicker/ColorPicker'
import TicTacToe from './TicTacToe/TicTacToe'

import './Portfolio.css'

const Portfolio = () => {
  const [page, setPage] = useState()
  
  const active = 'active-tab-color-mobile appsButton-mobile'
  const inactive = 'inactive-tab-color-mobile appsButton-mobile'
  
  const [calcActive, setCalcActive] = useState(inactive)
  const [colorPickActive, setColorPickActive] = useState(inactive)
  const [tictactoeActive, setTictactoeActive] = useState(inactive)
  
  const options = {
    calc: "calc",
    colorPick: "colorPick",
    tictactoe: "tictactoe",
  }
  
  const activeSwitcher = (option) => {
    setCalcActive(() => option === options.calc ? active : inactive)
    setColorPickActive(() => option === options.colorPick ? active : inactive)
    setTictactoeActive(() => option === options.tictactoe ? active : inactive)
  }
  
  const calc = () => {
    activeSwitcher(options.calc)
    setPage(
      <div className="appsMobile-col">
        <h3>iPhone Calculator</h3>
        <div className="appsMobile-blockCenter"><Calculator /></div>
      </div>
    )
  }
  
  const colorPick = () => {
    activeSwitcher(options.colorPick)
    setPage(
      <div className="appsMobile-col">
        <h3>Color Picker</h3>
        <div className="appsMobile-blockCenter"><ColorPicker /></div>
      </div>
    )
  }
  
  const tictactoe = () => {
    activeSwitcher(options.tictactoe)
    setPage(
      <div className="appsMobile-col">
        <h3>Tic-Tac-Toe</h3>
        <div className="appsMobile-blockCenter"><TicTacToe /></div>
      </div>
    )
  }
  
  return (
    <div className="mobile-content-apps">
      <div className="appsInnerContentButtons-mobile">
        <div className="appsButtons-rows-mobile">
          <div className="appsPadding-mobile">
            <div className={calcActive} onClick={calc}>Calculator</div>
          </div>
        </div>
        <div className="appsButtons-rows-mobile">
          <div className="appsPadding-mobile">
            <div className={colorPickActive} onClick={colorPick}>Pick a Color</div>
          </div>
        </div>
        {/* <div className="appsButtons-rows-mobile">
          <div className="appsPadding-mobile">
            <div className={tictactoeActive} onClick={tictactoe}>Tic-Tac-Toe</div>
          </div>
        </div> */}
        <div className="appsMobile-beCenter">
          {page}
        </div>
      </div>
    </div>
  )
}

export default Portfolio