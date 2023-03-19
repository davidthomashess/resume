import './TicTacToe.css'

import XoSymbols from '../../../../img/SVG/xo/xo-symbols.svg'
import OxoSymbols from '../../../../img/SVG/xo/o-xo-symbols.svg'
import XxoSymbols from '../../../../img/SVG/xo/x-xo-symbols.svg'

const xoCells = '50px'
const choices = '71px'

const TicTacToe = () => {
  return (
    <div className="mobile-xo-body">
      
      <div className="mobile-difficulty">
        <div className="mobile-easy-med">
          <div className="mobile-easy">╒EASY</div>
          <div className="mobile-med">FAIR╛</div>
        </div>
        <div className="mobile-hard">═╡BRUTAL╞═</div>
      </div>
      
      <div className="mobile-xo-board">
        <div className="row-1">
          <div className="row-1-col-a">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
          <div className="row-1-col-b">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
          <div className="row-1-col-c">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
        </div>
        <div className="row-2">
          <div className="row-2-col-a">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
          <div className="row-2-col-b">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
          <div className="row-2-col-c">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
        </div>
        <div className="row-3">
          <div className="row-3-col-a">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
          <div className="row-3-col-b">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
          <div className="row-3-col-c">
            <span className="vCenter">
              <img 
                className="xoCells" 
                src={XoSymbols} 
                alt="grayed out xo option" 
                width={xoCells} 
                height={xoCells}
              />
            </span>
          </div>
        </div>
        <div className="player">
          <div className="x-choice">
            <img 
              className="xoCells" 
              src={XxoSymbols} 
              alt="grayed out xo option" 
              width={choices} 
              height={choices}
            />
          </div>
          <div className="o-choice">
            <img 
              className="xoCells" 
              src={OxoSymbols} 
              alt="grayed out xo option" 
              width={choices}
              height={choices}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicTacToe;