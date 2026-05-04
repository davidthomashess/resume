import './Web.css'
import skills from '../../../Contents/skills.json'

const {
  react,
  css,
  graphics,
  dns
} = skills.global.skills.web

const Web = () => {
  return <div className="container">
    <div className="inner-container">
      <div className="sub-skill-1">
        <div className="inner-sub-skill-1-header">
          <h2>{react.sub}</h2>
        </div>
        <div className="inner-sub-skill-1-content">
          <ul>
            <li>{react.b1}</li>
            <li>{react.b2}</li>
            <li>{react.b3}</li>
            <li>{react.b4}</li>
            <li>{react.b5}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-2">
        <div className="inner-sub-skill-2-header">
          <h2>{css.sub}</h2>
        </div>
        <div className="inner-sub-skill-2-content">
          <ul>
            <li>{css.b1}</li>
            <li>{css.b2}</li>
            <li>{css.b3}</li>
            <li>{css.b4}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-3">
        <div className="inner-sub-skill-3-header">
          <h2>{graphics.sub}</h2>
        </div>
        <div className="inner-sub-skill-3-content">
          <ul>
            <li>{graphics.b1}</li>
            <li>{graphics.b2}</li>
            <li>{graphics.b3}</li>
            <li>{graphics.b4}</li>
          </ul>
        </div>
      </div>
      <div className="sub-skill-4">
        <div className="inner-sub-skill-4-header">
          <h2>{dns.sub}</h2>
        </div>
        <div className="inner-sub-skill-4-content">
          <ul>
            <li>{dns.b1}</li>
            <li>{dns.b2}</li>
            <li>{dns.b3}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Web