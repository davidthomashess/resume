import React, { useState } from 'react'

import './Git.css'

const skills = require('../../../Contents/skillsMobile.json')

const {
  git,
  bitbucket,
  github
} = skills.global.skills.git

const skillBuilder = (title, skills) => {
  return (
    <div className="sub-skill-mobile blocks">
      <div className="inner-git-skill-header-mobile">
        <h2>{title}</h2>
      </div>
      <div className="inner-git-skill-content-mobile">
        <ul>
          {typeof skills[0] !== 'undefined' && <li>{skills[0]}</li>}
          {typeof skills[1] !== 'undefined' && <li>{skills[1]}</li>}
          {typeof skills[2] !== 'undefined' && <li>{skills[2]}</li>}
        </ul>
      </div>
    </div>
  )
}

const Git = () => {
  const subSkill1 = () => {
    setCard(firstSkill())
  }
  
  const subSkill2 = () => {
    setCard(
      <div>
        <div className="skill-button blocks" onClick={subSkill1}>{`<`}</div>
        
        {skillBuilder(
          `${bitbucket.sub}`,
          [
            `${bitbucket.b1}`,
            `${bitbucket.b2}`,
            `${bitbucket.b3}`,
            `${bitbucket.b4}`
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
          `${github.sub}`,
          [
            `${github.b1}`,
            `${github.b2}`,
            `${github.b3}`,
            `${github.b4}`
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
          `${git.sub}`,
          [
            `${git.b1}`,
            `${git.b2}`,
            `${git.b3}`
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

export default Git