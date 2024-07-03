import './Testing.css'
import skills from '../../../Contents/skills.json'

const {
  cypress,
  manual,
  google
} = skills.global.skills.test

const Testing = () => {
  return <div className="container">
    <div className="inner-container">
      <div className="sub-skill-1">
        <div className="inner-sub-skill-1-header">
          <h2>{cypress.sub}</h2>
        </div>
        <div className="inner-sub-skill-1-content">
          <ul>
            <li>{cypress.b1}</li>
            <li>{cypress.b2}</li>
            <li>{cypress.b3}</li>
            <li>{cypress.b4}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-2">
        <div className="inner-sub-skill-2-header">
          <h2>{manual.sub}</h2>
        </div>
        <div className="inner-sub-skill-2-content">
          <ul>
            <li>{manual.b1}</li>
            <li>{manual.b2}</li>
            <li>{manual.b3}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-3">
        <div className="inner-sub-skill-3-header">
          <h2>{google.sub}</h2>
        </div>
        <div className="inner-sub-skill-3-content">
          <ul>
            <li>{google.b1}</li>
            <li>{google.b2}</li>
            <li>{google.b3}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Testing