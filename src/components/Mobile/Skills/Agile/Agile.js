import React, { useState } from 'react'

import './Agile.css'

const skills = require('../../../Contents/skillsMobile.json')

const {
  jira,
  note
} = skills.global.skills.agile

const skillBuilder = (title, skills) => {
  return (
    <div className="sub-skill-mobile blocks">
      <div className="inner-agile-skill-header-mobile">
        <h2>{title}</h2>
      </div>
      <div className="inner-agile-skill-content-mobile">
        <ul>
          {typeof skills[0] !== 'undefined' && <li>{skills[0]}</li>}
          {typeof skills[1] !== 'undefined' && <li>{skills[1]}</li>}
        </ul>
      </div>
    </div>
  )
}

const Agile = () => {
  const subSkill1 = () => {
    setCard(firstSkill())
  }
  
  const subSkill2 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill1}>{`<`}</div>
        
        {skillBuilder(
          `${note.sub}`,
          [
            `${note.b1}`,
            `${note.b2}`,
            `${note.b3}`
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
          `${jira.sub}`,
          [
            `${jira.b1}`,
            `${jira.b2}`,
            `${jira.b3}`,
            `${jira.b4}`
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

export default Agile