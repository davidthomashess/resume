import React, { useState } from 'react'

import './Testing.css'

const skills = require('../../../Contents/skillsMobile.json')

const {
  cypress,
  manual,
  google
} = skills.global.skills.test

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
          {typeof skills[3] !== 'undefined' && <li>{skills[3]}</li>}
          {typeof skills[4] !== 'undefined' && <li>{skills[4]}</li>}
          {typeof skills[5] !== 'undefined' && <li>{skills[5]}</li>}
        </ul>
      </div>
    </div>
  )
}

const Testing = () => {
  const subSkill1 = () => {
    setCard(firstSkill())
  }
  
  const subSkill2 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill1}>{`<`}</div>
        
        {skillBuilder(
          `${manual.sub}`,
          [
            `${manual.b1}`,
            `${manual.b2}`,
            `${manual.b3}`
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
          `${google.sub}`,
          [
            `${google.b1}`,
            `${google.b2}`,
            `${google.b3}`
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
          `${cypress.sub}`,
          [
            `${cypress.b1}`,
            `${cypress.b2}`,
            `${cypress.b3}`,
            `${cypress.b4}`
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

export default Testing