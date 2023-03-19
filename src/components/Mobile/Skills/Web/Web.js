import React, { useState } from 'react'

import './Web.css'

const skills = require('../../../Contents/skillsMobile.json')

const {
  react,
  css,
  graphics,
  dns
} = skills.global.skills.web

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
        </ul>
      </div>
    </div>
  )
}

const Web = () => {
  const subSkill1 = () => {
    setCard(firstSkill())
  }
  
  const subSkill2 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill1}>{`<`}</div>
        
        {skillBuilder(
          `${css.sub}`,
          [
            `${css.b1}`,
            `${css.b2}`,
            `${css.b3}`,
            `${css.b4}`
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
          `${graphics.sub}`,
          [
            `${graphics.b1}`,
            `${graphics.b2}`,
            `${graphics.b3}`,
            `${graphics.b4}`
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
          `${dns.sub}`,
          [
            `${dns.b1}`,
            `${dns.b2}`,
            `${dns.b3}`
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
          `${react.sub}`,
          [
            `${react.b1}`,
            `${react.b2}`,
            `${react.b3}`,
            `${react.b4}`,
            `${react.b5}`
          ]
        )}
        
        <div className="skill-button blocks" onClick={subSkill2}>{`>`}</div>
      </div>
    )
  }
  
  const [card, setCard] = useState(firstSkill)
  
  return (
  <div className="container-mobile">
    <div className="inner-container-mobile">
      {card}
    </div>
  </div>
  )
}

export default Web