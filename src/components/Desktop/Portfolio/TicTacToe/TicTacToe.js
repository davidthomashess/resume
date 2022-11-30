import './TicTacToe.css'

const TicTacToe = () => {
  return (
    <div className="desktop-xo-body">
      <h1 className="hey">hey</h1>
      <div className="desktop-difficulty">
        <div className="desktop-easy-med">
          <div className="desktop-easy"></div>
          <div className="desktop-med"></div>
        </div>
        <div className="desktop-hard"></div>
      </div>
      
      <div className="desktop-xo-board">
        <div className="row-1">
          <div className="row-1-col-a"></div>
          <div className="row-1-col-b"></div>
          <div className="row-1-col-c"></div>
        </div>
        <div className="row-2">
          <div className="row-2-col-a"></div>
          <div className="row-2-col-b"></div>
          <div className="row-2-col-c"></div>
        </div>
        <div className="row-3">
          <div className="row-3-col-a"></div>
          <div className="row-3-col-b"></div>
          <div className="row-3-col-c"></div>
        </div>
        <div className="player">
          <div className="x-choice">
            
          </div>
          <div className="o-choice">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicTacToe;