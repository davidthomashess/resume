import React,{ useState, useEffect } from 'react'
import './Difficulty.css'

const level = {
  easy: 'easy',
  fair: 'fair',
  hard: 'hard'
}

const lvlUI = {
  easy: '╒EASY',
  fair: 'FAIR╛',
  hard: '═╡BRUTAL╞═'
}

const pick = {
  none: '',
  picked: '-picked'
}

const startering = {
  state: false
}

export default function Difficulty({getDifficulty, go}) {
  const lvlBtn = (picked, diff, fancy) => (
    !startering.state ? (<div 
      className={`desktop-${diff}${picked}`}
      onClick={() => pickLvl(diff)}
    >{fancy}</div>)
    : (<div 
      className={`desktop-${diff}${picked}-disabled`}
    >{fancy}</div>)
  )
  
  useEffect(() => {
    startering.state = !go
  },[go])
  
  const useEasy = () => lvlBtn(pick.none, level.easy, lvlUI.easy)
  const useFair = () => lvlBtn(pick.none, level.fair, lvlUI.fair)
  const useHard = () => lvlBtn(pick.none, level.hard, lvlUI.hard)
  
  const [easyPick, setEasyPick] = useState(useEasy())
  const [fairPick, setFairPick] = useState(useFair())
  const [hardPick, setHardPick] = useState(useHard())
  
  const pickLvl = (diff) => {
    if (diff === level.easy) {
      setEasyPick(lvlBtn(pick.picked, level.easy, lvlUI.easy))
      setFairPick(lvlBtn(pick.none, level.fair, lvlUI.fair))
      setHardPick(lvlBtn(pick.none, level.hard, lvlUI.hard))
      
      return getDifficulty(level.easy)
    }
    
    if (diff === level.fair) {
      setEasyPick(lvlBtn(pick.none, level.easy, lvlUI.easy))
      setFairPick(lvlBtn(pick.picked, level.fair, lvlUI.fair))
      setHardPick(lvlBtn(pick.none, level.hard, lvlUI.hard))
      
      return getDifficulty(level.fair)
    }
    
    if (diff === level.hard) {
      setEasyPick(lvlBtn(pick.none, level.easy, lvlUI.easy))
      setFairPick(lvlBtn(pick.none, level.fair, lvlUI.fair))
      setHardPick(lvlBtn(pick.picked, level.hard, lvlUI.hard))
    }
    
    return getDifficulty(level.hard)
  }
  
  return (
    <div className="desktop-difficulty">
      <div className="desktop-easy-fair">
        {easyPick}
        {fairPick}
      </div>
      {hardPick}
    </div>
  )
}