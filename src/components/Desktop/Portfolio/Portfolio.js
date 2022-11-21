import Calculator from './Calculator/Calculator'

import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="desktop-content-app">
      <div className="desktop-col">
        <h3>iPhone Calculator</h3>
        <Calculator />
      </div>
      <div className="desktop-col">
        <h3>Color Picker</h3>
        <p>
          I mastered how to 
        </p>
      </div>
      <div className="desktop-col">
        <h3>Tic-Tac-Toe</h3>
        <p>
          Na na na na na.
        </p>
      </div>
    </div>
  )
}

export default Portfolio