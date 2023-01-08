import React,{ useState } from 'react'
import './TicTacToe.css'
import Difficulty from './Difficulty/Difficulty'
import Game from './Game/Game'
import Player from './Player/Player'

// import OxoSymbols from '../../../../img/SVG/xo/o-xo-symbols.svg'
// import XxoSymbols from '../../../../img/SVG/xo/x-xo-symbols.svg'

const TicTacToe = () => {
  const [lvl, setLvl] = useState('')
  const [player, setPlayer] = useState('')
  const [go, setGo] = useState(false)
  const chkLvl = (lvl !== '')
  
  const getDifficulty = (fromDifficulty) => {
    setLvl(fromDifficulty)
  }
  
  const declare = (fromPlayer) => {
    setPlayer(chkLvl && !go ? fromPlayer : lvl)
    setGo(chkLvl && !go ? true : false)
  }
  
  return (
    <div className="desktop-xo-body">
      <Difficulty getDifficulty={getDifficulty} go={go}/>
      <div className="desktop-xo-board">
        <Game player={`${player}`} lvl={`${lvl}`}/>
        <Player lvl={`${lvl}`} declare={declare} player={player} go={go} />
      </div>
    </div>
  )
}

export default TicTacToe;