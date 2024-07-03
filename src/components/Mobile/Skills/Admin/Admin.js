import React, { useState } from 'react'

import './Admin.css'

const skills = require('../../../Contents/skillsMobile.json')

const {
  oc,
  prisma,
  docker,
  yaml
} = skills.global.skills.admin

const skillBuilder = (title, skills) => {
  return (
    <div className="sub-skill-mobile blocks">
      <div className="inner-admin-skill-header-mobile">
        <h2>{title}</h2>
      </div>
      <div className="inner-admin-skill-content-mobile">
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

const Admin = () => {
  const subSkill1 = () => {
    setCard(firstSkill())
  }
  
  const subSkill2 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill1}>{`<`}</div>
        
        {skillBuilder(
          `${oc.sub}`,
          [
            `${oc.b1}`,
            `${oc.b2}`,
            `${oc.b3}`
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
          `${prisma.sub}`,
          [
            `${prisma.b1}`,
            `${prisma.b2}`
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
          `${docker.sub}`,
          [
            `${docker.b1}`
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
          `${yaml.sub}`,
          [
            `${yaml.b1}`,
            `${yaml.b2}`
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

export default Admin