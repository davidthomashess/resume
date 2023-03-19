import './Game.css'
import Decide from './Decide/Decide'
import EasyO from './EasyO/EasyO'
import EasyX from './EasyX/EasyX'
import FairO from './FairO/FairO'
import FairX from './FairX/FairX'
import HardO from './HardO/HardO'
import HardX from './HardX/HardX'

const side = {
  nix: '',
  o: 'o',
  x: 'x'
}

const level = {
  easy: 'easy',
  fair: 'fair',
  hard: 'hard'
}

export default function Game({player, lvl}) {
  console.log(`Game - Player: ${player}`)
  console.log(`Game - Level:  ${lvl}`)
  
  return (
    player === side.nix ? <Decide /> 
    : player === side.o && lvl === level.easy ? <EasyO />
    : player === side.x && lvl === level.easy ? <EasyX />
    : player === side.o && lvl === level.fair ? <FairO />
    : player === side.x && lvl === level.fair ? <FairX />
    : player === side.o && lvl === level.hard ? <HardO />
    : <HardX />
  )
}