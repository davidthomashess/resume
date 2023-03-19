import React, { useState } from 'react'

import './Databases.css'

const skills = require('../../../Contents/skillsMobile.json')

const {
  sql,
  nosql,
  dba,
  er
} = skills.global.skills.data

const skillBuilder = (title, skills) => {
  return (
    <div className="sub-skill-mobile blocks">
      <div className="inner-databases-skill-header-mobile">
        <h2>{title}</h2>
      </div>
      <div className="inner-databases-skill-content-mobile">
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

const Databases = () => {
  const subSkill1 = () => {
    setCard(firstSkill())
  }
  
  const subSkill2 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill1}>{`<`}</div>
        
        {skillBuilder(
          `${nosql.sub}`,
          [
            `${nosql.b1}`,
            `${nosql.b2}`
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
          `${dba.sub}`,
          [
            `${dba.b1}`,
            `${dba.b2}`,
            `${dba.b3}`
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
          `${er.sub}`,
          [
            `${er.b1}`,
            `${er.b2}`,
            `${er.b3}`,
            `${er.b4}`
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
          `${sql.sub}`,
          [
            `${sql.b1}`,
            `${sql.b2}`,
            `${sql.b3}`,
            `${sql.b4}`
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

export default Databases