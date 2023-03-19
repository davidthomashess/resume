import './Player.css'
import BtnXxoSymbol from '../../../../../img/SVG/xo/btn-x-xo-symbols.svg'
import BtnOxoSymbol from '../../../../../img/SVG/xo/btn-o-xo-symbols.svg'

const choices = '71px'

const you = {
  none: '',
  gray: '-disabled',
  picked: '-picked'
}

const side = {
  none: '',
  x: 'x',
  o: 'o'
}

const showXO = {
  x: 'desktop-x-choice',
  o: 'desktop-o-choice'
} 

export default function Player({ lvl, declare, player, go }) {
  const sideler = (choice) => 
    (lvl === you.none && player === side.none) ? you.gray 
    : (lvl !== you.none && player === choice) ? you.picked 
    : (lvl !== you.none && player === side.none) ? you.none
    : you.gray
  
  const img = (side) =>
    <img 
      className={`desktop-player-xoCells${sideler(side)}`}
      src={side === 'x' ? BtnXxoSymbol : BtnOxoSymbol} 
      alt="grayed out xo option" 
      width={choices} 
      height={choices}
    />
  
  const getPick = (side) =>
    <div className={`${side === 'x' ? showXO.x : showXO.o}${sideler(side)}`}>{
        !go ? (<div className='desktop-player-img'onClick={() => declare(side)}>{img(side)}</div>)
        : (<div className='desktop-player-img'>{img(side)}</div>)
      }</div>
  return (
    <div className="desktop-player">
      {getPick(side.x)}
      {getPick(side.o)}
    </div>
  )
}