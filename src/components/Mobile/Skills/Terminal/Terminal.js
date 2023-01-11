import React, { useState } from 'react'

import './Terminal.css'

const skills = require('../../../Contents/skillsMobile.json')

const {
  linux,
  batch,
  ps
} = skills.global.skills.shell

const skillBuilder = (title, skills) => {
  return (
    <div className="sub-skill-mobile blocks">
      <div className="inner-sub-skill-header-mobile">
        <h2>{title}</h2>
      </div>
      <div className="inner-sub-skill-content-mobile">
        <ul>
          {typeof skills[0] !== 'undefined' && <li>{skills[0]}</li>}
          {typeof skills[1] !== 'undefined' && <li>{skills[1]}</li>}
          {typeof skills[2] !== 'undefined' && <li>{skills[2]}</li>}
        </ul>
      </div>
    </div>
  )
}

const Terminal = () => {
  const subSkill1 = () => {
    setCard(firstSkill())
  }
  
  const subSkill2 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill1}>{`<`}</div>
        
        {skillBuilder(
          `${batch.sub}`,
          [
            `${batch.b1}`,
            `${batch.b2}`,
            `${batch.b3}`
          ]
        )}
        
        <div className="skill-button blocks" onClick={subSkill3}>{`>`}</div>
      </div>
    )
  }
  
  const subSkill3 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill2}>{`<`}</div>
        
        {skillBuilder(
          `${ps.sub}`,
          [
            `${ps.b1}`,
            `${ps.b2}`
          ]
        )}
        
        <div className="skill-button disabled blocks" disabled>{`>`}</div>
      </div>
    )
  }

  const firstSkill = () => {
    return (
      <div>
        <div className="skill-button disabled blocks" disabled>{`<`}</div>
        
        {skillBuilder(
          `${linux.sub}`,
          [
            `${linux.b1}`,
            `${linux.b2}`,
            `${linux.b3}`,
            `${linux.b4}`
          ]
        )}
        
        <div className="skill-button blocks" onClick={subSkill2}>{`>`}</div>
      </div>
    )
  }
  
  const [card, setCard] = useState(firstSkill())
  
  return (
  <div className="container-mobile">
    <div className="inner-container-mobile">
      {card}
    </div>
  </div>
  )
}

export default Terminal