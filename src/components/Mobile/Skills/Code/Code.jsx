import React, { useState } from 'react'

import './Code.css'

const skills = require('../../../Contents/skillsMobile.json')

const {
  js,
  ts,
  bash,
  json
} = skills.global.skills.code

const skillBuilder = (title, skills) => {
  return (
    <div className="sub-skill-mobile blocks">
      <div className="inner-code-skill-header-mobile">
        <h2>{title}</h2>
      </div>
      <div className="inner-code-skill-content-mobile">
        <ul>
          {typeof skills[0] !== 'undefined' && <li>{skills[0]}</li>}
          {typeof skills[1] !== 'undefined' && <li>{skills[1]}</li>}
          {typeof skills[2] !== 'undefined' && <li>{skills[2]}</li>}
          {typeof skills[3] !== 'undefined' && <li>{skills[3]}</li>}
        </ul>
      </div>
    </div>
  )
}

const Code = () => {
  const subSkill1 = () => {
    setCard(firstSkill)
  }
  
  const subSkill2 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill1}>{`<`}</div>
        
        {skillBuilder(
          `${ts.sub}`,
          [
            `${ts.b1}`,
            `${ts.b2}`
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
          `${bash.sub}`,
          [
            `${bash.b1}`,
            `${bash.b2}`
          ]
        )}
        
        <div className="skill-button blocks" onClick={subSkill4}>{`>`}</div>
      </div>
    )
  }
  
  const subSkill4 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill3}>{`<`}</div>
          
        {skillBuilder(
          `${json.sub}`,
          [
            `${json.b1}`,
            `${json.b2}`
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
          `${js.sub}`,
          [
            `${js.b1}`,
            `${js.b2}`,
            `${js.b3}`,
            `${js.b4}`
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

export default Code