import Calculator from './Calculator/Calculator'
import ColorPicker from './ColorPicker/ColorPicker'
import TicTacToe from './TicTacToe/TicTacToe'

import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="tablet-content-app">
      <div className="tablet-col">
        <h3>iPhone Calculator</h3>
        <Calculator />
      </div>
      <div className="tablet-col">
        <h3>Color Picker</h3>
        <ColorPicker />
      </div>
      {/* <div className="tablet-col">
        <h3>Tic-Tac-Toe</h3>
        <TicTacToe />
      </div> */}
    </div>
  )
}

export default Portfolio